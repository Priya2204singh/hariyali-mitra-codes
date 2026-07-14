import React from 'react';
import { ArrowLeft, Moon, Sun, Bell, Shield, CircleHelp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';

export default function Settings() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5 text-gray-600" />
            </div>
            <span className="font-medium text-gray-900">Dark Mode</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>

        <SettingItem icon={<Bell className="text-gray-600" />} label="Notifications" />
        <SettingItem icon={<Shield className="text-gray-600" />} label="Privacy & Security" />
        <SettingItem icon={<CircleHelp className="text-gray-600" />} label="Help & Support" />
      </div>
    </div>
  );
}

function SettingItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none w-full">
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="font-medium text-gray-900 flex-1 text-left">{label}</span>
      <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
    </button>
  );
}
