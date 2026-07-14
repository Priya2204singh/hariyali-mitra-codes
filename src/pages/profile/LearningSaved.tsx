import React from 'react';
import { ArrowLeft, PlayCircle, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';

export default function LearningSaved() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Saved Learning</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="overflow-hidden group cursor-pointer">
          <div className="h-40 bg-gray-800 relative">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=400" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-gray-900 line-clamp-2">Modern Drip Irrigation Techniques for Maximum Yield</h3>
            <p className="text-sm text-gray-500 mt-2">10 mins watch • Farm Tech</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
