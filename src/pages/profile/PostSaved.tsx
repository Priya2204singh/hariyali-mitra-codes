import React from 'react';
import { ArrowLeft, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';

export default function PostSaved() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Saved Posts</h1>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Suresh Patel</h4>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
              <Bookmark className="w-5 h-5 text-green-600 fill-current" />
            </div>
            <p className="text-gray-800 text-sm mb-3">
              Has anyone tried the new organic pesticide for tomato crops? Looking for some feedback before I purchase it for my 2-acre farm.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
              <span>12 Likes</span>
              <span>8 Comments</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
