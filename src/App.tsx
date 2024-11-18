import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import RecordingPage from './components/RecordingPage';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/record" replace />} />
          <Route path="/record" element={<RecordingPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        <Navigation />
        <Toaster position="top-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;