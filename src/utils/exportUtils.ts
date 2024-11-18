import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';
import { Note } from '../types/note';

export const exportToPDF = (note: Note) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(16);
  doc.text(note.title, 20, 20);
  
  // Patient Info
  doc.setFontSize(12);
  doc.text(`Patient: ${note.patientName}`, 20, 30);
  doc.text(`Date: ${format(note.date, 'PPP')}`, 20, 40);
  
  // Insurance Details if available
  if (note.insuranceDetails) {
    doc.text('Insurance Information:', 20, 50);
    doc.text(`Provider: ${note.insuranceDetails.provider}`, 30, 60);
    doc.text(`Policy Number: ${note.insuranceDetails.policyNumber}`, 30, 70);
    doc.text(`Billing Code: ${note.insuranceDetails.billingCode}`, 30, 80);
    doc.text(`Amount: $${note.insuranceDetails.amount.toFixed(2)}`, 30, 90);
    doc.text(note.content, 20, 100);
  } else {
    doc.text(note.content, 20, 60);
  }
  
  doc.save(`${note.title}-${format(note.date, 'yyyy-MM-dd')}.pdf`);
};

export const exportToWord = (note: Note) => {
  let content = `
${note.title}
Patient: ${note.patientName}
Date: ${format(note.date, 'PPP')}
`;

  if (note.insuranceDetails) {
    content += `
Insurance Information:
Provider: ${note.insuranceDetails.provider}
Policy Number: ${note.insuranceDetails.policyNumber}
Billing Code: ${note.insuranceDetails.billingCode}
Amount: $${note.insuranceDetails.amount.toFixed(2)}
`;
  }

  content += `\n${note.content}`;
  
  const blob = new Blob([content], { type: 'application/msword' });
  saveAs(blob, `${note.title}-${format(note.date, 'yyyy-MM-dd')}.doc`);
};

export const sendEmail = (note: Note) => {
  const subject = encodeURIComponent(note.title);
  let body = `
Patient: ${note.patientName}
Date: ${format(note.date, 'PPP')}
`;

  if (note.insuranceDetails) {
    body += `
Insurance Information:
Provider: ${note.insuranceDetails.provider}
Policy Number: ${note.insuranceDetails.policyNumber}
Billing Code: ${note.insuranceDetails.billingCode}
Amount: $${note.insuranceDetails.amount.toFixed(2)}
`;
  }

  body += `\n${note.content}`;
  
  window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(body)}`;
};