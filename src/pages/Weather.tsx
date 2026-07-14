import React from 'react';
import { CloudSun, CloudRain, Droplets, Wind, Thermometer, Sun, MapPin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function Weather() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weather</h1>
          <p className="text-gray-500 flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" /> Ludhiana, Punjab
          </p>
        </div>
      </header>

      <div className="max-w-2xl">
        
        {/* Weather Section */}
        <section className="space-y-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-20 pointer-events-none translate-x-4 -translate-y-4">
              <CloudSun className="w-64 h-64" />
            </div>
            
            <CardContent className="p-6 md:p-8 relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-xl font-medium text-blue-100 mb-1">Today</h2>
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-bold">28°</span>
                    <span className="text-2xl text-blue-100 mb-1">C</span>
                  </div>
                  <p className="text-lg mt-2 font-medium">Partly Cloudy</p>
                </div>
                <CloudSun className="w-20 h-20" />
              </div>
              
              <div className="grid grid-cols-3 gap-4 bg-white/20 rounded-2xl p-4 backdrop-blur-md">
                <div className="flex flex-col items-center">
                  <Droplets className="w-6 h-6 mb-2 opacity-80"/>
                  <span className="text-xs text-blue-100 mb-1">Humidity</span>
                  <span className="font-semibold">65%</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/20">
                  <Wind className="w-6 h-6 mb-2 opacity-80"/>
                  <span className="text-xs text-blue-100 mb-1">Wind</span>
                  <span className="font-semibold">12 km/h</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/20">
                  <CloudRain className="w-6 h-6 mb-2 opacity-80"/>
                  <span className="text-xs text-blue-100 mb-1">Rain Chance</span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">5-Day Forecast</h3>
            <div className="space-y-3">
              {[
                { day: 'Tomorrow', icon: <CloudSun className="w-6 h-6 text-gray-500"/>, high: 29, low: 18, desc: 'Partly Cloudy' },
                { day: 'Wednesday', icon: <Sun className="w-6 h-6 text-yellow-500"/>, high: 31, low: 19, desc: 'Sunny' },
                { day: 'Thursday', icon: <CloudRain className="w-6 h-6 text-blue-500"/>, high: 26, low: 17, desc: 'Light Rain' },
                { day: 'Friday', icon: <CloudSun className="w-6 h-6 text-gray-500"/>, high: 27, low: 16, desc: 'Mostly Clear' },
              ].map((day, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <span className="font-medium w-24 text-gray-900">{day.day}</span>
                  <div className="flex items-center gap-3 w-32">
                    {day.icon}
                    <span className="text-sm text-gray-500">{day.desc}</span>
                  </div>
                  <div className="font-semibold text-gray-900">
                    {day.high}° <span className="text-gray-400 font-normal">/ {day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
