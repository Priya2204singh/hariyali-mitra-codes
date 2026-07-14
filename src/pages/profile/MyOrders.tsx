import React from 'react';
import { ArrowLeft, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';

export default function MyOrders() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4 flex gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
               <Package className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Organic Urea Fertilizer - 50kg</h3>
              <p className="text-sm text-gray-500 mb-2">Order ID: #ORD-98234</p>
              <div className="flex items-center gap-3">
                <span className="font-bold text-green-700">₹1,200</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">Delivered</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
               <Package className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Hybrid Tomato Seeds</h3>
              <p className="text-sm text-gray-500 mb-2">Order ID: #ORD-98235</p>
              <div className="flex items-center gap-3">
                <span className="font-bold text-green-700">₹450</span>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">In Transit</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
