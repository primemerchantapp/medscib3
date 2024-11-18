import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import NoteCard from './NoteCard';
import { Note } from '../types/note';
import { exportToPDF, exportToWord, sendEmail } from '../utils/exportUtils';

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Initial Consultation',
    content: 'Patient presented with symptoms of acute bronchitis...',
    date: new Date('2024-03-10'),
    patientName: 'John Doe',
    category: 'Consultation'
  },
  {
    id: '2',
    title: 'Insurance Claim Report',
    content: 'Comprehensive evaluation for insurance claim processing...',
    date: new Date('2024-03-09'),
    patientName: 'Jane Smith',
    category: 'Insurance',
    insuranceDetails: {
      provider: 'Blue Cross',
      policyNumber: 'BC123456789',
      billingCode: 'CPT-99213',
      amount: 150.00
    }
  }
];

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.patientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || note.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Notes History</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <CategoryFilter
              category={filterCategory}
              onCategoryChange={setFilterCategory}
            />
          </div>

          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onExportPDF={exportToPDF}
                onExportWord={exportToWord}
                onSendEmail={sendEmail}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}