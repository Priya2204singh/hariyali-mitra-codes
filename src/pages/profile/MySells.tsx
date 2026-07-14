import React from 'react';
import { ArrowLeft, Tag, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function MySells() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">My Sells</h1>
        </div>
        <Button size="sm" className="rounded-full"><Plus className="w-4 h-4 mr-1" /> Add Product</Button>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4 flex gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
               <Tag className="w-8 h-8 text-amber-500" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900">Wheat (Sharbati) - 10 Quintals</h3>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">Active</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Listed on: 10 Oct 2023</p>
              <div className="flex items-center gap-3">
                <span className="font-bold text-green-700">₹28,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
