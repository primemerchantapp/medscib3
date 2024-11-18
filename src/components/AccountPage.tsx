import React from 'react';
import { LogOut, ChevronRight } from 'lucide-react';
import { auth } from '../lib/firebase';

interface UserProfile {
  email: string;
  specialty: string;
}

export default function AccountPage() {
  const profile: UserProfile = {
    email: 'emil.apexsolution@gmail.com',
    specialty: 'Addiction Medicine'
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-8 pb-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Account</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="text-gray-900">{profile.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Specialty</label>
              <p className="text-gray-900">{profile.specialty}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Support?</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email Us</label>
              <p className="text-blue-600">scribe-support@commure.com</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Call Us</label>
              <p className="text-blue-600">415-680-9328</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full p-4 bg-white rounded-lg shadow-sm flex items-center justify-between">
            <span className="text-gray-900">Change Password</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          
          <button className="w-full p-4 bg-white rounded-lg shadow-sm flex items-center justify-between">
            <span className="text-gray-900">Upgrade to Pro</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Scribe Core
            </span>
          </button>
          
          <button
            onClick={handleLogout}
            className="w-full p-4 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-900"
          >
            <LogOut className="h-5 w-5 mr-2" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}