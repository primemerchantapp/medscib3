import React, { useState } from 'react';
import { Mic } from 'lucide-react';

export default function RecordingPage() {
  const [patientName, setPatientName] = useState('');
  const [template, setTemplate] = useState('SOAP Note');
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Implement actual recording logic here
  };

  return (
    <div className="min-h-screen bg-white px-4 pt-8 pb-20">
      <div className="max-w-md mx-auto">
        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <h2 className="text-xl text-blue-600 font-semibold">Let's simulate a patient visit</h2>
          <p className="text-gray-600 mt-2">Press "Start Recording" and Scribe will start recording your conversation.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Patient Name</label>
            <input
              type="text"
              placeholder="Enter Patient Name (Optional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Template</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option>SOAP Note</option>
              <option>Progress Note</option>
              <option>Consultation Note</option>
            </select>
          </div>

          <button
            onClick={handleStartRecording}
            className={`w-full py-4 rounded-lg flex items-center justify-center space-x-2 ${
              isRecording
                ? 'bg-red-600 text-white'
                : 'bg-black text-white'
            }`}
          >
            <Mic className="h-6 w-6" />
            <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}