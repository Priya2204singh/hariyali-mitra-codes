import React from 'react';
import { BookOpen, FileText, PlayCircle, ExternalLink, Bookmark, Search, Share2, Landmark } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';

export default function GovernmentSchemes() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between sticky top-0 md:relative bg-surface/80 backdrop-blur-md z-30 py-2 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Landmark className="w-6 h-6 text-primary" />
            Government Schemes
          </h1>
          <p className="text-gray-500 mt-1">Subsidies, loans, and benefits for you</p>
        </div>
        <div className="w-full md:w-72">
          <Input 
            icon={<Search className="w-5 h-5" />}
            placeholder="Search schemes..."
            className="bg-white"
          />
        </div>
      </header>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {['All Schemes', 'Subsidies', 'Loans & Credit', 'Insurance', 'Equipment', 'State specific (Punjab)'].map((tab, i) => (
          <button key={i} className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SchemeCard 
          title="PM-Kisan Samman Nidhi"
          category="Financial Support"
          description="Income support of ₹6,000 per year in three equal installments to all landholding farmer families."
          deadline="Open all year"
          benefit="₹6,000/year"
          bgColor="bg-green-50"
          tag="Central Govt"
        />
        <SchemeCard 
          title="Pradhan Mantri Fasal Bima Yojana (PMFBY)"
          category="Crop Insurance"
          description="Comprehensive insurance cover against failure of the crop helping in stabilizing the income of the farmers."
          deadline="15 July 2026 (Kharif)"
          benefit="Full Coverage"
          bgColor="bg-blue-50"
          tag="Central Govt"
        />
        <SchemeCard 
          title="Sub-Mission on Agricultural Mechanization (SMAM)"
          category="Equipment Subsidy"
          description="Subsidy up to 50-80% for purchasing agricultural machinery and equipment like tractors and harvesters."
          deadline="30 Aug 2026"
          benefit="50-80% Subsidy"
          bgColor="bg-orange-50"
          tag="State Govt"
        />
        <SchemeCard 
          title="Kisan Credit Card (KCC)"
          category="Loans & Credit"
          description="Adequate and timely credit support from the banking system under a single window with flexible and simplified procedure."
          deadline="Open all year"
          benefit="Low Interest Loan"
          bgColor="bg-purple-50"
          tag="Banking"
        />
      </div>

    </div>
  );
}

function SchemeCard({ title, category, description, deadline, benefit, bgColor, tag }: any) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-all">
      <div className={`p-6 pb-4 rounded-t-2xl ${bgColor} border-b border-gray-100`}>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="outline" className="bg-white border-transparent shadow-sm text-gray-700">{category}</Badge>
          <button className="p-1.5 bg-white/50 hover:bg-white rounded-full text-gray-500 hover:text-primary transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">{title}</h3>
        <span className="inline-flex items-center text-xs font-semibold text-gray-600 bg-white/60 px-2 py-1 rounded-md">
          {tag}
        </span>
      </div>
      <CardContent className="p-6 pt-5 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        
        <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Key Benefit</span>
            <span className="font-bold text-green-700">{benefit}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Deadline</span>
            <span className="font-semibold text-gray-900">{deadline}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Button variant="outline" className="w-full">Details</Button>
          <Button className="w-full">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
