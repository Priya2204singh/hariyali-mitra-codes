import React from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Circle, Clock, Plus, Sprout, AlertCircle, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function Planner() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between sticky top-0 md:relative bg-surface/80 backdrop-blur-md z-30 py-2 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Crop Planner</h1>
          <p className="text-gray-500">Track tasks and maximize yield</p>
        </div>
        <Button className="rounded-full shadow-sm"><Plus className="w-5 h-5 mr-2"/> Add Task</Button>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-primary text-white border-none">
          <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
            <Sprout className="w-8 h-8 opacity-80 mb-4" />
            <div>
              <p className="text-primary-lightest text-xs font-medium">Active Crops</p>
              <h3 className="text-xl font-bold mt-1">2</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
            <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
            <div>
              <p className="text-gray-500 text-xs font-medium">Tasks Completed</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">14</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
            <Clock className="w-8 h-8 text-orange-500 mb-4" />
            <div>
              <p className="text-gray-500 text-xs font-medium">Pending Today</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">3</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
            <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
            <div>
              <p className="text-gray-500 text-xs font-medium">Estimated Yield</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">On Track</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        
        {/* Main Task List */}
        <div className="lg:col-span-2 space-y-6">
          
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              Today's Schedule <Badge className="ml-3 bg-orange-100 text-orange-800 border-none">Priority</Badge>
            </h2>
            <div className="space-y-3">
              <TaskCard 
                title="Apply 1st dose of Urea to Wheat"
                time="Morning (Before 10 AM)"
                field="Field A (3 Acres)"
                priority="high"
                completed={false}
              />
              <TaskCard 
                title="Irrigate Mustard Crop"
                time="Evening"
                field="Field B (2 Acres)"
                priority="medium"
                completed={false}
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 mt-8 flex items-center">
              Upcoming This Week
            </h2>
            <div className="space-y-3">
              <TaskCard 
                title="Pesticide Spray (Preventive)"
                time="Wed, 14 Feb"
                field="Field A"
                priority="medium"
                completed={false}
              />
              <TaskCard 
                title="Soil Moisture Check"
                time="Thu, 15 Feb"
                field="All Fields"
                priority="low"
                completed={false}
              />
            </div>
          </div>
          
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b border-gray-100">
              <CardTitle className="text-base flex items-center"><CalendarIcon className="w-5 h-5 mr-2 text-primary"/> Crop Cycle</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Wheat (HD 2967)</span>
                  <span className="text-gray-500">Day 45 / 135</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-1/3"></div>
                </div>
                <p className="text-xs text-gray-500">Next stage: Tillering</p>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Mustard (Pusa)</span>
                  <span className="text-gray-500">Day 60 / 110</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full w-[55%]"></div>
                </div>
                <p className="text-xs text-gray-500">Next stage: Flowering</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-900 mb-1">AI Recommendation</h4>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    Based on your soil type and current weather, applying Zinc Sulphate this week will boost your wheat yield by up to 5%.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 bg-white border-orange-200 text-orange-700">Add to Tasks</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TaskCard({ title, time, field, priority, completed }: any) {
  return (
    <div className={`p-4 rounded-2xl border transition-all ${completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-primary/50 hover:shadow-sm'}`}>
      <div className="flex items-start gap-4">
        <button className={`mt-0.5 shrink-0 transition-colors ${completed ? 'text-green-500' : 'text-gray-300 hover:text-primary'}`}>
          {completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>
        <div className="flex-1">
          <h3 className={`font-semibold text-base sm:text-lg mb-1 ${completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5"/> {time}</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5"/> {field}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
