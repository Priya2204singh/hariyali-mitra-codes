import React from 'react';
import { motion } from 'framer-motion';
import { CloudSun, Droplets, MapPin, ChevronRight, Sprout, Tractor, Wrench, Package, ArrowRight, Sun, Thermometer, Wind, ShoppingBag, Users, Bot, Camera, Clock, ExternalLink, Star, Wind as Drone, BookOpen, Quote, ShieldAlert, Umbrella, User, TrendingUp, TrendingDown, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function Home() {
  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      
      {/* Top AI & Camera Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/assistant" className="block h-full">
          <div className="bg-[#eff6e9] hover:bg-[#e4eedb] transition-colors rounded-full shadow-sm flex items-center justify-center gap-2 py-3.5 px-2 h-full cursor-pointer">
            <Bot className="w-6 h-6 text-[#5b9553]" />
            <span className="text-base font-bold text-gray-800">Ask Mitra AI</span>
          </div>
        </Link>
        
        <div className="block cursor-pointer h-full">
          <div className="bg-[#5b9553] hover:bg-[#4a8043] transition-colors rounded-full shadow-sm flex items-center justify-center gap-2 py-3.5 px-2 h-full">
            <Camera className="w-6 h-6 text-white" />
            <span className="text-base font-bold text-white">Scan Crop</span>
          </div>
        </div>
      </div>

      {/* Today's Tasks */}
      <div>
        <Card className="shadow-sm border-gray-100">
          <CardContent className="p-0">
            <div className="p-5 flex items-center justify-between border-b border-gray-50">
              <h3 className="font-bold text-lg text-gray-900">Today's Task</h3>
              <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200 px-3 py-1 font-medium rounded-full shadow-sm">
                <Clock className="w-3 h-3 mr-1" /> 3 Pending
              </Badge>
            </div>
            <div className="p-4 space-y-3">
              {[
                { task: 'Apply Urea in Field A (Morning)', due: '10 May, 2025', field: 'Field A' },
                { task: 'Irrigation for Field B', due: '10 May, 2025', field: 'Field B' },
              ].map((task, i) => (
                <label key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 cursor-pointer transition-all group shadow-sm bg-white">
                  <div className="relative flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded group-hover:border-primary transition-colors mt-0.5">
                    <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 leading-tight truncate">{task.task}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">Due: {task.due} • {task.field}</p>
                  </div>
                  <Badge variant="outline" className="text-orange-500 border-orange-200 bg-orange-50 font-medium text-[10px] px-2 py-0 h-5 rounded-md">Pending</Badge>
                </label>
              ))}
            </div>
            <div className="p-4 pt-0">
              <Button variant="ghost" className="w-full bg-green-50 hover:bg-green-100 text-green-800 font-medium h-12 text-sm rounded-xl flex items-center justify-between px-6">
                View Full Planner <ChevronRight className="w-5 h-5 text-green-600" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Access (Quick Access Grid) */}
      <Card className="shadow-sm border-gray-100">
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-4 text-gray-900">Access</h3>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <QuickActionCard icon={<ShoppingBag className="w-8 h-8 text-green-600 drop-shadow-sm" />} label="Buy" />
            <QuickActionCard icon={<Package className="w-8 h-8 text-amber-700 drop-shadow-sm" />} label="Sell" />
            <QuickActionCard icon={<Sprout className="w-8 h-8 text-emerald-600 drop-shadow-sm" />} label="My Farm" />
            <QuickActionCard icon={<Tractor className="w-8 h-8 text-green-700 drop-shadow-sm" />} label="Rent Tractor" />
            <QuickActionCard icon={<Drone className="w-8 h-8 text-gray-700 drop-shadow-sm" />} label="Rent Drone" />
            <QuickActionCard icon={<BookOpen className="w-8 h-8 text-teal-800 drop-shadow-sm" />} label="Learning Centre" />
          </div>
        </CardContent>
      </Card>

      {/* Live Mandi Prices */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1 mb-2">
          <Link to="/marketplace" className="hover:opacity-80 transition-opacity">
            <h3 className="font-[900] text-xl text-[#0b1c2a] tracking-tight">Live Mandi Prices</h3>
          </Link>
          <Badge variant="outline" className="text-[#15b253] border-[#15b253]/30 bg-[#15b253]/10 font-bold px-3 py-1 rounded-xl text-xs tracking-wide">Live</Badge>
        </div>

        <div className="space-y-4">
          <Card className="shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] border-gray-100 rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h4 className="font-[900] text-xl text-[#0b1c2a] tracking-tight mb-1.5">Wheat (Sharbati)</h4>
                  <p className="text-sm font-semibold text-gray-500 flex items-center gap-1.5">
                    <MapPin className="w-[18px] h-[18px] text-gray-400" strokeWidth={2.5} />
                    Ludhiana APMC
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-[900] text-2xl text-[#0b1c2a] tracking-tight">₹2,800</p>
                  <p className="text-sm font-semibold text-gray-500 mt-0.5">/ Quintal</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100/80">
                <p className="text-[13px] font-bold text-[#94a3b8]">Updated: Today, 10:30 AM</p>
                <p className="text-sm font-[900] text-[#15b253] flex items-center gap-1">
                  <TrendingUp className="w-[18px] h-[18px]" strokeWidth={3} /> +₹50
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] border-gray-100 rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h4 className="font-[900] text-xl text-[#0b1c2a] tracking-tight mb-1.5">Mustard</h4>
                  <p className="text-sm font-semibold text-gray-500 flex items-center gap-1.5">
                    <MapPin className="w-[18px] h-[18px] text-gray-400" strokeWidth={2.5} />
                    Ludhiana APMC
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-[900] text-2xl text-[#0b1c2a] tracking-tight">₹5,400</p>
                  <p className="text-sm font-semibold text-gray-500 mt-0.5">/ Quintal</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100/80">
                <p className="text-[13px] font-bold text-[#94a3b8]">Updated: Today, 09:15 AM</p>
                <p className="text-sm font-[900] text-red-600 flex items-center gap-1">
                  <TrendingDown className="w-[18px] h-[18px]" strokeWidth={3} /> -₹20
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Govt Schemes */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="font-bold text-lg text-gray-900">Govt Schemes</h3>
          <button className="text-sm text-green-700 font-medium hover:underline flex items-center">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          
          <Card className="shadow-sm border-green-100 bg-gradient-to-br from-[#f0fdf4] to-white relative overflow-hidden">
            <CardContent className="p-3 flex flex-col h-full justify-between gap-3">
              <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border border-green-200 shrink-0">
                    <User className="w-5 h-5 text-green-700" />
                 </div>
                 <div>
                   <h4 className="font-bold text-green-900 text-xs leading-tight">PM-Kisan Yojana</h4>
                   <p className="text-[9px] text-gray-600 mt-0.5 leading-tight line-clamp-2">प्रधानमंत्री किसान सम्मान निधि योजना</p>
                 </div>
              </div>
              <Button size="sm" variant="outline" className="bg-green-100 text-green-800 border-none hover:bg-green-200 text-[10px] px-3 h-7 rounded-full font-medium flex items-center justify-center gap-1 w-full">
                Know More <ExternalLink className="w-3 h-3" />
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-blue-100 bg-gradient-to-br from-[#eff6ff] to-white relative overflow-hidden">
            <CardContent className="p-3 flex flex-col h-full justify-between gap-3">
              <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 shrink-0">
                    <Umbrella className="w-5 h-5 text-blue-600" />
                 </div>
                 <div>
                   <h4 className="font-bold text-blue-900 text-xs leading-tight">Fasal Bima Yojana</h4>
                   <p className="text-[9px] text-gray-600 mt-0.5 leading-tight line-clamp-2">फसल बीमा योजना</p>
                 </div>
              </div>
              <Button size="sm" variant="outline" className="bg-blue-100 text-blue-800 border-none hover:bg-blue-200 text-[10px] px-3 h-7 rounded-full font-medium flex items-center justify-center gap-1 w-full">
                Know More <ExternalLink className="w-3 h-3" />
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
      
      {/* Customer Reviews */}
      <Card className="shadow-sm border-gray-100 bg-[#fafafa]">
        <CardContent className="p-5 relative">
          <div className="flex items-center gap-2 mb-3">
             <Quote className="w-5 h-5 text-green-600 fill-current" />
             <h3 className="font-bold text-sm text-gray-900">Customer Reviews</h3>
          </div>
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
          </div>
          <p className="text-gray-800 text-sm font-medium mb-3 relative z-10">
            Hariyali Mitra has made farming simple and smart.
          </p>
          <div className="flex items-center justify-between relative z-10">
            <p className="text-xs text-gray-500">- Ramesh Yadav, Kanpur</p>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
               <img src="https://i.pravatar.cc/100?img=11" alt="Ramesh Yadav" className="w-full h-full object-cover" />
            </div>
          </div>
          <Quote className="w-12 h-12 text-gray-200 fill-current absolute right-4 bottom-4 transform rotate-180 z-0" />
        </CardContent>
      </Card>

    </div>
  );
}

function QuickActionCard({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group h-full"
    >
      <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="font-medium text-xs text-gray-800 text-center">{label}</span>
    </motion.button>
  );
}
