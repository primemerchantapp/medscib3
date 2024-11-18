import React from 'react';
import { format } from 'date-fns';
import { Download, Mail, FileText, Trash2 } from 'lucide-react';
import { Note } from '../types/note';

interface NoteCardProps {
  note: Note;
  onExportPDF: (note: Note) => void;
  onExportWord: (note: Note) => void;
  onSendEmail: (note: Note) => void;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onExportPDF, onExportWord, onSendEmail, onDelete }: NoteCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{note.title}</h3>
          <p className="text-sm text-gray-600">
            Patient: {note.patientName} | Date: {format(note.date, 'PPP')}
          </p>
          <span className="inline-block mt-2 px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            {note.category}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onExportPDF(note)}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            title="Export as PDF"
          >
            <FileText className="h-5 w-5" />
          </button>
          <button
            onClick={() => onExportWord(note)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            title="Export as Word"
          >
            <Download className="h-5 w-5" />
          </button>
          <button
            onClick={() => onSendEmail(note)}
            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
            title="Send via Email"
          >
            <Mail className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            title="Delete Note"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      <p className="text-gray-700 line-clamp-3">{note.content}</p>
    </div>
  );
}