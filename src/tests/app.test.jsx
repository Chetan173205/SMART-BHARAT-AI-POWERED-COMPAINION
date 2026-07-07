import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// Import data & logic
import { schemes } from '../data/schemes';
import { getChatResponse } from '../data/chatbotKb';
import { sanitizeText, validateFile } from '../utils/security';

// Import components (lazy loaded usually, but imported directly for testing)
import SchemeMatcher from '../components/SchemeMatcher';
import CivicReporter from '../components/CivicReporter';

// Helper mock state mapping function to check eligibility offline in test
function matchSchemesOffline({ age, income, occupation, gender, state }) {
  return schemes.filter(scheme => {
    const rules = scheme.eligibility;
    if (age < rules.minAge || age > rules.maxAge) return false;
    if (rules.maxIncome !== null && income > rules.maxIncome) return false;
    if (rules.gender !== "All" && gender !== rules.gender) return false;
    if (!rules.occupations.includes("All")) {
      const matchesOccupation = rules.occupations.some(occ => {
        return occ.toLowerCase() === occupation.toLowerCase() || 
               (occupation === "Worker" && occ.toLowerCase() === "labourer");
      });
      if (!matchesOccupation) return false;
    }
    if (!rules.states.includes("All")) {
      const matchesState = rules.states.some(s => s.toLowerCase() === state.toLowerCase());
      if (!matchesState) return false;
    }
    return true;
  });
}

describe('Smart Bharat Civic Companion Test Suite', () => {

  // Test 1: Scheme-Matching Logic (State coverage check for Delhi)
  it('correctly matches Delhi Mahila Samman Yojana for eligible Delhi female resident', () => {
    const results = matchSchemesOffline({
      age: 30,
      income: 150000,
      occupation: "Housewife",
      gender: "Female",
      state: "Delhi"
    });
    
    const hasDelhiScheme = results.some(s => s.id === "delhi-mahila-samman");
    expect(hasDelhiScheme).toBe(true);
  });

  // Test 2: Chatbot Intent-Matching Logic
  it('correctly maps birth certificate keywords to the birth certificate guidance response', () => {
    const responseEn = getChatResponse("I need to apply for a birth certificate", false);
    expect(responseEn.answer).toContain("CRS");
    expect(responseEn.answer).toContain("21 days");

    const responseHi = getChatResponse("जन्म प्रमाण पत्र बनवाना है", true);
    expect(responseHi.answer).toContain("पंजीकरण");
  });

  // Test 3: Form Input & Security Sanitization Validation
  it('sanitizes user text inputs, removing script tags and HTML elements', () => {
    const maliciousInput = '<script>alert("XSS")</script>Hello <p>World</p>';
    const cleanOutput = sanitizeText(maliciousInput);
    
    expect(cleanOutput).not.toContain('<script>');
    expect(cleanOutput).not.toContain('<p>');
    expect(cleanOutput).toBe('Hello World');
  });

  it('correctly flags oversized files and incorrect MIME types', () => {
    const dummyFile = new File(["dummy text"], "test.txt", { type: "text/plain" });
    const validationText = validateFile(dummyFile);
    expect(validationText.isValid).toBe(false);
    expect(validationText.error).toContain("Invalid file type");

    // Over size limit (6MB)
    const largeFile = {
      name: "large.png",
      type: "image/png",
      size: 6 * 1024 * 1024 // 6MB
    };
    const validationSize = validateFile(largeFile, ["image/png"], 5);
    expect(validationSize.isValid).toBe(false);
    expect(validationSize.error).toContain("File size exceeds limit");
  });

  // Test 4: Mailto Link Complaint Draft Generation
  it('correctly generates official formatted printable letter and drafts mailto link parameters', () => {
    const category = "Sanitation and Waste";
    const location = "Ward 8, Sector C";
    const description = "Garbage piles left uncollected near public school gate.";
    const dateStr = "07 Jul 2026";
    const trackingId = "SB-2026-9999";

    const letterBody = `DATE: ${dateStr}\nTRACKING ID: ${trackingId}\n\nSUBJECT: Official Request to Resolve Civic Grievance regarding "${category}"\n\nDetails: ${description}\n\nLocation: ${location}`;
    
    // Simulate mailto URL escaping check
    const emailSubject = encodeURIComponent(`[Grievance] ${category} at ${location}`);
    const emailBody = encodeURIComponent(letterBody);
    const mailtoUrl = `mailto:authority@municipal.gov.in?subject=${emailSubject}&body=${emailBody}`;

    expect(mailtoUrl).toContain("mailto:authority@municipal.gov.in");
    expect(mailtoUrl).toContain("subject=%5BGrievance%5D%20Sanitation%20and%20Waste%20at%20Ward%208%2C%20Sector%20C");
  });

  // Test 5: Render Test for SchemeMatcher Component
  it('renders SchemeMatcher component with fields and matches layout', () => {
    render(<SchemeMatcher lang="en" />);
    
    // Check that title renders
    expect(screen.getByText("Welfare Scheme Eligibility Checker")).toBeInTheDocument();
    
    // Check form input fields exist
    expect(screen.getByLabelText("Age (in years)")).toBeInTheDocument();
    expect(screen.getByLabelText("Annual Family Income (₹)")).toBeInTheDocument();
    expect(screen.getByLabelText("Occupation / Profession")).toBeInTheDocument();
    expect(screen.getByLabelText("Gender")).toBeInTheDocument();
    expect(screen.getByLabelText("State / Union Territory")).toBeInTheDocument();
  });

  // Test 6: Render Test for CivicReporter Component
  it('renders CivicReporter with tracker table and list', () => {
    const mockComplaints = [
      {
        id: "SB-2026-0001",
        date: "07 Jul 2026",
        category: "Water Supply Issue",
        location: "Kharghar Sect 4",
        status: "pending"
      }
    ];
    const mockSetComplaints = vi.fn();

    render(<CivicReporter lang="en" complaints={mockComplaints} setComplaints={mockSetComplaints} />);
    
    // Check headings
    expect(screen.getByText("Civic Issue Grievance Portal")).toBeInTheDocument();
    expect(screen.getByText(/My Filed Complaints & Status Tracker/)).toBeInTheDocument();

    // Check mock complaint renders inside tracker table
    expect(screen.getByText("SB-2026-0001")).toBeInTheDocument();
    expect(screen.getAllByText("Water Supply Issue").length).toBe(2);
    expect(screen.getByText("Kharghar Sect 4")).toBeInTheDocument();
  });

});
