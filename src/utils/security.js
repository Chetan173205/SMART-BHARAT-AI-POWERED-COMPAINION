/**
 * Security utilities for input sanitization, HTML escaping,
 * script injection prevention, and file size/type validation.
 */

/**
 * Sanitizes input text to prevent script injection and HTML parsing.
 * Truncates text to a specified maximum length.
 * 
 * @param {string} input 
 * @param {number} maxLength 
 * @returns {string} Sanitized string
 */
export function sanitizeText(input, maxLength = 1000) {
  if (typeof input !== 'string') return '';
  
  // Truncate to maximum length
  let sanitized = input.slice(0, maxLength);
  
  // Remove common script tags, html tag patterns, and onload/onclick attributes
  sanitized = sanitized.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
  sanitized = sanitized.replace(/<[^>]+>/g, '');
  sanitized = sanitized.replace(/on\w+\s*=/gi, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Escape HTML characters
  return sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validates a file instance for size (in MB) and mime-type.
 * 
 * @param {File} file 
 * @param {Array<string>} allowedTypes 
 * @param {number} maxSizeMb 
 * @returns {object} { isValid: boolean, error: string }
 */
export function validateFile(file, allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'], maxSizeMb = 5) {
  if (!file) return { isValid: true, error: null };
  
  // Check MIME Type
  if (!allowedTypes.includes(file.type)) {
    return { 
      isValid: false, 
      error: `Invalid file type. Allowed formats: ${allowedTypes.map(t => t.split('/')[1]).join(', ')}` 
    };
  }
  
  // Check File Size
  const maxSizeBytes = maxSizeMb * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return { 
      isValid: false, 
      error: `File size exceeds limit of ${maxSizeMb}MB.` 
    };
  }
  
  return { isValid: true, error: null };
}

/**
 * Checks if a string contains potential script injection patterns.
 * 
 * @param {string} text 
 * @returns {boolean} True if malicious content is detected
 */
export function hasScriptInjection(text) {
  if (typeof text !== 'string') return false;
  const lowerText = text.toLowerCase();
  return (
    lowerText.includes('<script') ||
    lowerText.includes('javascript:') ||
    lowerText.includes('onload') ||
    lowerText.includes('onerror') ||
    lowerText.includes('onclick')
  );
}
