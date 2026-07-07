import React, { useState, useMemo, useCallback } from 'react';
import { translations } from '../data/i18n';
import { sanitizeText, validateFile } from '../utils/security';

export default function CivicReporter({ lang, complaints, setComplaints }) {
  const t = translations[lang] || translations["en"];

  // Grievance Categories (Memoized)
  const categories = useMemo(() => [
    { value: "Streetlight Failure", label: lang === 'hi' ? "स्ट्रीटलाइट विफलता" : "Streetlight Failure" },
    { value: "Roads & Potholes", label: lang === 'hi' ? "सड़कें और गड्ढे" : "Roads & Potholes" },
    { value: "Sanitation and Waste", label: lang === 'hi' ? "स्वच्छता और कचरा" : "Sanitation and Waste" },
    { value: "Water Supply Issue", label: lang === 'hi' ? "जलापूर्ति समस्या" : "Water Supply Issue" },
    { value: "Electricity Fault", label: lang === 'hi' ? "बिजली की खराबी" : "Electricity Fault" },
    { value: "Public Safety Hazard", label: lang === 'hi' ? "सार्वजनिक सुरक्षा खतरा" : "Public Safety Hazard" },
    { value: "Other Grievances", label: lang === 'hi' ? "अन्य शिकायतें" : "Other Grievances" }
  ], [lang]);

  // Input states
  const [category, setCategory] = useState("Streetlight Failure");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photoDataUrl, setPhotoDataUrl] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [complaintDraft, setComplaintDraft] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // File upload preview
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFileError(null);
    setPhotoDataUrl(null);

    if (file) {
      const validation = validateFile(file, ['image/jpeg', 'image/png', 'image/gif', 'image/webp'], 5);
      if (!validation.isValid) {
        setFileError(validation.error);
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataUrl(reader.result);
      };
      reader.onerror = () => {
        setFileError("Error reading file.");
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit and generate letter
  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (!description.trim() || !location.trim()) return;

    // Security sanitization
    const cleanDesc = sanitizeText(description, 1000);
    const cleanLoc = sanitizeText(location, 200);
    const cleanCat = sanitizeText(category, 50);

    if (!cleanDesc.trim() || !cleanLoc.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const trackingId = `SB-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const letterBody = `DATE: ${dateStr}
TRACKING ID: ${trackingId}

FROM:
Resident Representative (Citizen Companion User)
E-Grievance Cell Registrant

TO:
The Assistant Municipal Commissioner / Ward Officer,
Department of Public Grievances & Municipal Works,
Municipal Division Office.


SUBJECT: Official Request to Resolve Civic Grievance regarding "${cleanCat}"

Respected Sir/Madam,

I am writing this letter to bring to your immediate attention a severe civic grievance in our locality regarding the category "${cleanCat}".

Details of the Complaint:
----------------------------------------------------------------------
${cleanDesc}
----------------------------------------------------------------------

Location of the Issue:
----------------------------------------------------------------------
${cleanLoc}
----------------------------------------------------------------------

This issue is creating massive inconvenience and hazards for the residents, local business owners, and commuters passing through the area daily. We request you to direct the concerned inspectors to conduct an immediate field visit and initiate repair and cleanup actions.

Thank you in advance for your quick administrative response.

Yours faithfully,
Local Resident & Smart Bharat User
[Signature / Digitally Verified]`;

      setComplaintDraft(letterBody);

      // Save under current user session complaints list
      const newComplaint = {
        id: trackingId,
        date: dateStr,
        category: cleanCat,
        location: cleanLoc,
        status: "pending"
      };

      setComplaints([newComplaint, ...complaints]);

      setToastMessage(t.complaintSuccess);
      setTimeout(() => setToastMessage(null), 4000);
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  // mailto drafting
  const handleDraftEmail = () => {
    if (!complaintDraft) return;
    const cleanCat = sanitizeText(category, 50);
    const cleanLoc = sanitizeText(location, 100);

    const emailSubject = encodeURIComponent(`[Grievance] ${cleanCat} at ${cleanLoc}`);
    const emailBody = encodeURIComponent(complaintDraft);
    window.location.href = `mailto:authority@municipal.gov.in?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleReset = () => {
    setDescription("");
    setLocation("");
    setPhotoDataUrl(null);
    setComplaintDraft(null);
    setFileError(null);
  };

  return (
    <div className="civic-reporter-container">
      {toastMessage && (
        <div className="simulated-notification" role="alert">
          {toastMessage}
        </div>
      )}

      {/* Main Report Form */}
      <section className="glass-card" aria-labelledby="civic-title-heading">
        <div className="form-title-group">
          <h2 id="civic-title-heading">{t.civicTitle}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.civicSubtitle}</p>
        </div>

        <form onSubmit={handleSubmitReport}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="civic-category">{t.labelCategory}</label>
              <select
                id="civic-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="civic-location">{t.labelLoc}</label>
              <input
                type="text"
                id="civic-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Sector 12 Crossroad, near municipal garden"
                maxLength="200"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="civic-desc">{t.labelDesc}</label>
              <textarea
                id="civic-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                placeholder="Enter details of the issue and why it needs urgent resolution..."
                maxLength="1000"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="civic-photo">{t.labelPhoto}</label>
              <input
                type="file"
                id="civic-photo"
                accept="image/jpeg,image/png,image/gif,image/webp"
                onChange={handlePhotoUpload}
                style={{ padding: '8px' }}
                aria-describedby="file-error-msg"
              />
              
              {fileError && (
                <div id="file-error-msg" style={{ color: '#fc8181', fontSize: '0.8rem', fontWeight: '600' }} role="alert">
                  ⚠️ {fileError}
                </div>
              )}
              
              {photoDataUrl && (
                <div className="photo-preview-container">
                  <img 
                    src={photoDataUrl} 
                    className="photo-preview" 
                    alt={`Evidence of ${category} grievance at ${location}`} 
                  />
                  <div>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600' }}>Evidence Photo Uploaded</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Will be referenced in the letter.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (lang === 'hi' ? "दर्ज किया जा रहा है..." : "Submitting...") : t.btnGenerateLetter}
            </button>
            <button type="button" className="btn-secondary" onClick={handleReset}>
              {t.btnResetReport}
            </button>
          </div>
        </form>

        {/* Complaint letter draft preview */}
        {complaintDraft && (
          <div className="letter-preview-card" aria-label="Complaint Letter Draft Preview">
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📜 {t.complaintDraftTitle}
            </h3>
            
            {/* Translation Note for secondary languages */}
            {!['en', 'hi'].includes(lang) && (
              <div 
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--saffron)',
                  backgroundColor: 'rgba(255, 153, 51, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  fontWeight: '500'
                }}
                role="note"
              >
                ℹ️ {t.transNote}
              </div>
            )}

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {t.complaintNote}
            </p>
            
            <div className="letter-content" role="document">
              {complaintDraft}
              {photoDataUrl && (
                <div style={{ marginTop: '24px', borderTop: '1px solid #cbd5e0', paddingTop: '16px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '8px' }}>ATTACHMENT (IMAGE EVIDENCE):</p>
                  <img src={photoDataUrl} style={{ maxWidth: '280px', maxHeight: '200px', borderRadius: '4px', border: '1px solid #cbd5e0' }} alt="Attachment evidence preview" />
                </div>
              )}
            </div>

            <div className="letter-actions">
              <button className="btn-success" onClick={handlePrint} aria-label={t.btnPrint}>
                🖨️ {t.btnPrint}
              </button>
              <button className="btn-primary" onClick={handleDraftEmail} aria-label={t.btnDraftEmail}>
                ✉️ {t.btnDraftEmail}
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Grievance Status Tracker List */}
      <section className="glass-card civic-status-section" aria-labelledby="tracker-title-heading">
        <h3 id="tracker-title-heading">📊 {t.statusTitle}</h3>
        
        {complaints.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '30px 20px',
            border: '1px dashed var(--border-card)',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            marginTop: '16px',
            color: 'var(--text-muted)'
          }}>
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '8px' }}>📂</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '500' }}>
              {lang === 'hi' ? "अभी तक कोई शिकायत दर्ज नहीं की गई है।" : "No complaints submitted yet."}
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="status-table">
              <thead>
                <tr>
                  <th scope="col">{t.statusTrackId}</th>
                  <th scope="col">{t.statusDate}</th>
                  <th scope="col">{t.statusCategory}</th>
                  <th scope="col">Location</th>
                  <th scope="col">{t.statusCurrent}</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((c) => (
                  <tr key={c.id}>
                    <td style={{ fontWeight: '700', color: 'var(--saffron)' }}>{c.id}</td>
                    <td>{c.date}</td>
                    <td>{c.category}</td>
                    <td style={{ maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {c.location}
                    </td>
                    <td>
                      <span className={`badge-status ${c.status}`}>
                        {c.status === 'pending' ? t.statusPending : 
                         c.status === 'assigned' ? t.statusAssigned : 
                         t.statusResolved}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
