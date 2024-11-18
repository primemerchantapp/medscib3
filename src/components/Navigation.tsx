import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mic, FileText, Settings, User } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between py-3">
          <NavLink
            to="/record"
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 ${
                isActive ? 'text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <Mic className="h-6 w-6" />
            <span className="text-xs">Record</span>
          </NavLink>
          
          <NavLink
            to="/scribes"
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 ${
                isActive ? 'text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <FileText className="h-6 w-6" />
            <span className="text-xs">My Scribes</span>
          </NavLink>
          
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 ${
                isActive ? 'text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs">AI Templates</span>
          </NavLink>
          
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 ${
                isActive ? 'text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <User className="h-6 w-6" />
            <span className="text-xs">Account</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}