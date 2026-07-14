import React from 'react';
import { PlayCircle, BookOpen, Clock, Star, Play, ChevronRight, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export default function LearningCenter() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Learning Center
          </h1>
          <p className="text-gray-500 mt-1">Master modern farming techniques</p>
        </div>
      </header>

      {/* Featured Video */}
      <section className="bg-gray-900 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Tractor in field" 
          className="w-full aspect-[21/9] md:aspect-[21/7] object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
          <Badge className="bg-primary hover:bg-primary text-white border-none mb-3">Featured Course</Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 max-w-2xl">Advanced Drone Spraying Techniques for Kharif Crops</h2>
          <p className="text-gray-300 mb-4 flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5"/> 45 mins</span>
            <span className="flex items-center"><Star className="w-4 h-4 mr-1.5 fill-yellow-400 text-yellow-400"/> 4.9 (12k views)</span>
          </p>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
          <Button variant="ghost" className="text-primary hover:bg-primary/10">View All <ChevronRight className="w-4 h-4 ml-1"/></Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Organic Vermicompost Making at Home', type: 'Video', time: '15 mins', views: '8.4k', color: 'bg-green-100', text: 'text-green-700' },
            { title: 'Identifying Common Wheat Diseases', type: 'Article', time: '8 min read', views: '15k', color: 'bg-blue-100', text: 'text-blue-700' },
            { title: 'Setup Solar Drip Irrigation', type: 'Video Series', time: '1 hr 20 mins', views: '22k', color: 'bg-yellow-100', text: 'text-yellow-700' },
            { title: 'Soil Testing Guide 2026', type: 'PDF Guide', time: '12 pages', views: '5k', color: 'bg-orange-100', text: 'text-orange-700' },
          ].map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-all cursor-pointer group flex flex-col h-full">
              <div className={`aspect-video ${item.color} flex items-center justify-center relative overflow-hidden`}>
                {item.type.includes('Video') ? <PlayCircle className={`w-12 h-12 ${item.text} opacity-50 group-hover:scale-110 transition-transform`} /> : <BookOpen className={`w-10 h-10 ${item.text} opacity-50 group-hover:scale-110 transition-transform`} />}
              </div>
              <CardContent className="p-5 flex flex-col flex-1">
                <Badge variant="outline" className={`w-fit mb-3 border-transparent ${item.color} ${item.text}`}>{item.type}</Badge>
                <h3 className="font-bold text-gray-900 leading-snug mb-3 flex-1">{item.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium pt-3 border-t border-gray-100 mt-auto">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1"/> {item.time}</span>
                  <span>{item.views} views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certification Path */}
      <section className="bg-primary rounded-3xl p-6 md:p-8 text-white relative overflow-hidden mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
          <Award className="w-96 h-96" />
        </div>
        <div className="relative z-10 max-w-lg">
          <Badge className="bg-white/20 text-white border-none mb-4 hover:bg-white/30">New Feature</Badge>
          <h2 className="text-3xl font-bold mb-3">Become a Certified Modern Farmer</h2>
          <p className="text-primary-lightest mb-6 leading-relaxed">Complete our 4-week online training program to earn a Government-recognized certificate and unlock special subsidies on agricultural equipment.</p>
          <Button className="bg-white text-primary hover:bg-gray-50 rounded-xl px-8">Start Program</Button>
        </div>
        <div className="relative z-10 flex-shrink-0 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
          <Award className="w-16 h-16 md:w-24 md:h-24 text-yellow-400" />
        </div>
      </section>

    </div>
  );
}
