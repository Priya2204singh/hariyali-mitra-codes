import React from 'react';
import { Search, SlidersHorizontal, ShoppingCart, Heart, Star, MapPin, ShieldCheck, Leaf, ShoppingBag } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export default function Marketplace() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Search */}
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between sticky top-0 md:relative bg-surface/80 backdrop-blur-md z-30 py-2 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent">
        <div className="flex-1 max-w-2xl flex gap-2">
          <Input 
            icon={<Search className="w-5 h-5" />}
            placeholder="Search seeds, fertilizers, tractors..."
            className="bg-white shadow-sm"
          />
          <Button variant="outline" size="icon" className="shrink-0 bg-white shadow-sm h-14 w-14 rounded-2xl">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="icon" className="relative rounded-full">
            <Heart className="w-5 h-5 text-gray-600" />
          </Button>
          <Button variant="outline" size="icon" className="relative rounded-full">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center -mt-1 -mr-1">2</span>
          </Button>
          <Button>Sell Product</Button>
        </div>
      </header>

      {/* Categories */}
      <section>
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {['All Products', 'Seeds', 'Fertilizers', 'Crop Protection', 'Tools & Machinery', 'Organic', 'Animal Care'].map((cat, i) => (
            <button key={i} className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-orange-200 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
          <Leaf className="w-64 h-64 text-orange-400" />
        </div>
        <div className="max-w-xl relative z-10">
          <Badge className="bg-orange-500 hover:bg-orange-600 mb-4 border-none text-white">Pre-Monsoon Sale</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get ready for Kharif Season</h2>
          <p className="text-gray-700 mb-6 text-lg">Up to 40% off on certified seeds and premium organic fertilizers.</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">Shop Offers</Button>
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'Pioneer Hybrid Maize Seed', price: '₹1,250', oldPrice: '₹1,500', rating: 4.8, reviews: 124, org: false, gov: true, image: 'bg-yellow-100' },
            { name: 'Organic Neem Oil Pesticide', price: '₹450', oldPrice: '₹550', rating: 4.5, reviews: 89, org: true, gov: false, image: 'bg-green-100' },
            { name: 'IFFCO NPK 12:32:16', price: '₹1,470', rating: 4.9, reviews: 432, org: false, gov: true, image: 'bg-blue-100' },
            { name: 'Heavy Duty Hand Trowel', price: '₹299', oldPrice: '₹399', rating: 4.6, reviews: 56, org: false, gov: false, image: 'bg-gray-100' },
            { name: 'Solar Water Pump 5HP', price: '₹45,000', oldPrice: '₹52,000', rating: 4.7, reviews: 21, org: false, gov: true, image: 'bg-sky-100' },
            { name: 'Vermicompost (50kg)', price: '₹800', rating: 4.8, reviews: 156, org: true, gov: false, image: 'bg-amber-100' },
          ].map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
}

function ProductCard({ item, ...props }: { item: any } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className="group flex flex-col hover:shadow-md transition-all border-gray-100 h-full relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10 pointer-events-none">
        <div className="flex flex-col gap-1">
          {item.org && <Badge variant="success" className="shadow-sm"><Leaf className="w-3 h-3 mr-1"/> Organic</Badge>}
          {item.gov && <Badge variant="secondary" className="bg-blue-100 text-blue-800 shadow-sm"><ShieldCheck className="w-3 h-3 mr-1"/> Certified</Badge>}
        </div>
        <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors pointer-events-auto shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Image Placeholder */}
      <div className={`aspect-square ${item.image} flex items-center justify-center mb-0 p-4 transition-transform duration-500 group-hover:scale-105`}>
        <ShoppingBag className="w-16 h-16 text-black/10" />
      </div>

      {/* Content */}
      <CardContent className="p-4 flex flex-col flex-1 pt-4 bg-white z-10 relative">
        <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2 mb-1">{item.name}</h3>
        
        <div className="flex items-center gap-1 mb-2 mt-auto pt-2">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{item.rating}</span>
          <span className="text-xs text-gray-400">({item.reviews})</span>
        </div>
        
        <div className="flex items-end justify-between mt-1">
          <div>
            <span className="font-bold text-lg text-gray-900">{item.price}</span>
            {item.oldPrice && <span className="text-xs text-gray-400 line-through ml-1.5">{item.oldPrice}</span>}
          </div>
          <button className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center text-gray-700 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
