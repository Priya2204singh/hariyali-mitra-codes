import React from 'react';
import { Package, Tag, Bookmark, Heart, Settings, Globe, LogIn, ChevronRight, Pencil, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
      </div>
      
      <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-gray-500 text-2xl font-bold">
           <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ramesh Kumar</h1>
          <p className="text-gray-500">+91 98765 43210</p>
        </div>
        <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors" title="Edit Profile">
          <Pencil className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <ProfileMenuItem to="/orders" icon={<Package className="text-blue-500" />} label="My Orders" />
        <ProfileMenuItem to="/sells" icon={<Tag className="text-green-500" />} label="My Sells" />
        <ProfileMenuItem to="/learning-saved" icon={<Bookmark className="text-amber-500" />} label="Learning Saved" />
        <ProfileMenuItem to="/post-saved" icon={<Heart className="text-red-500" />} label="Post Saved" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <ProfileMenuItem to="/settings" icon={<Settings className="text-gray-500" />} label="Settings" />
        <ProfileMenuItem to="/profile" icon={<Globe className="text-indigo-500" />} label="Language Select" value="English" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <Link to="/login" className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors w-full">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <LogIn className="w-5 h-5 text-primary" />
          </div>
          <span className="font-medium text-gray-900 flex-1 text-left">Login / Sign Up</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
      </div>
    </div>
  );
}

function ProfileMenuItem({ to, icon, label, value }: { to: string, icon: React.ReactNode, label: string, value?: string }) {
  return (
    <Link to={to} className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none w-full">
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="font-medium text-gray-900 flex-1 text-left">{label}</span>
      {value && <span className="text-sm text-gray-500 mr-2">{value}</span>}
      <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
    </Link>
  );
}
