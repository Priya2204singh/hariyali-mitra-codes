import React from 'react';
import { Search, MapPin, Star, ShieldCheck, Tractor, Droplets, ArrowRight } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { cn } from '../lib/utils';

export default function Services() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Search */}
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between sticky top-0 md:relative bg-surface/80 backdrop-blur-md z-30 py-2 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent">
        <div className="flex-1 max-w-2xl flex gap-2">
          <Input 
            icon={<Search className="w-5 h-5" />}
            placeholder="Search tractor rental, drone spraying..."
            className="bg-white shadow-sm"
          />
        </div>
      </header>

      {/* Categories */}
      <section>
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {['All Services', 'Tractor Rental', 'Drone Spraying', 'Harvester', 'Soil Testing', 'Irrigation', 'Labor'].map((cat, i) => (
            <button key={i} className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-200 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
          <Tractor className="w-64 h-64 text-blue-500" />
        </div>
        <div className="max-w-xl relative z-10">
          <Badge className="bg-blue-600 hover:bg-blue-700 mb-4 border-none text-white">Government Subsidized</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Drone Spraying</h2>
          <p className="text-gray-700 mb-6 text-lg">Fast, efficient, and saves 30% pesticide. Available now in your district with 50% subsidy.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Book Now</Button>
        </div>
      </section>

      {/* Service Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Nearby Providers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'John Deere 5310 Tractor Rental', provider: 'Singh Agri Services', price: '₹800/hr', rating: 4.8, reviews: 45, dist: '2 km', gov: true, icon: <Tractor className="w-8 h-8 text-orange-600"/>, bg: 'bg-orange-100' },
            { name: 'Agricultural Drone Spraying', provider: 'Kisan Tech Drones', price: '₹400/acre', rating: 4.9, reviews: 112, dist: '5 km', gov: true, icon: <Droplets className="w-8 h-8 text-blue-600"/>, bg: 'bg-blue-100' },
            { name: 'Soil Health Testing Lab', provider: 'Govt. Krishi Kendra', price: '₹50/sample', rating: 4.5, reviews: 320, dist: '12 km', gov: true, icon: <MapPin className="w-8 h-8 text-green-600"/>, bg: 'bg-green-100' },
            { name: 'Combine Harvester', provider: 'Patel Farm Equipments', price: '₹1200/acre', rating: 4.7, reviews: 89, dist: '15 km', gov: false, icon: <Tractor className="w-8 h-8 text-yellow-600"/>, bg: 'bg-yellow-100' },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </section>

    </div>
  );
}

function ServiceCard({ service, ...props }: { service: any } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className="hover:shadow-md transition-all h-full flex flex-col">
      <CardContent className="p-5 flex flex-col h-full relative">
        {service.gov && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 shadow-sm"><ShieldCheck className="w-3.5 h-3.5 mr-1"/> Verified</Badge>
          </div>
        )}
        
        <div className="flex gap-4 items-start mb-4">
          <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", service.bg)}>
            {service.icon}
          </div>
          <div className="pt-1">
            <h3 className="font-bold text-gray-900 leading-tight mb-1 pr-16">{service.name}</h3>
            <p className="text-sm text-gray-500">{service.provider}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-3 mb-6">
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1.5" />
            <span className="font-medium text-gray-900">{service.rating}</span>
            <span className="text-gray-400 ml-1">({service.reviews})</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
            {service.dist} away
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-500 block mb-0.5">Starting from</span>
            <span className="font-bold text-lg text-gray-900">{service.price}</span>
          </div>
          <Button className="rounded-xl px-5">Book</Button>
        </div>
      </CardContent>
    </Card>
  );
}
