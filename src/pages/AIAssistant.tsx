import React, { useState } from 'react';
import { Send, Mic, Camera, Paperclip, MoreVertical, Bot, User, Wheat } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export default function AIAssistant() {
  const [query, setQuery] = useState('');
  
  const suggestions = [
    "What crop should I grow in June?",
    "Identify this disease (upload photo)",
    "Today's mandi recommendation",
    "Current government subsidies"
  ];

  const messages = [
    { type: 'ai', text: 'Ram Ram! I am your AI Farming Assistant. How can I help you improve your farm today?', time: '10:00 AM' },
    { type: 'user', text: 'My wheat crop leaves are turning slightly yellow at the edges. What could be the issue?', time: '10:05 AM' },
    { type: 'ai', text: 'Based on your description, yellowing edges on wheat leaves usually indicates a Potassium (K) deficiency or early signs of rust disease.\n\nCould you upload a close-up photo of the leaves so I can identify the exact issue and recommend a treatment?', time: '10:05 AM' }
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] md:h-[calc(100vh-40px)] max-w-4xl mx-auto p-4 md:p-6 animate-in fade-in duration-500">
      
      <header className="flex items-center justify-between bg-white p-4 rounded-t-3xl border border-b-0 border-gray-100 shadow-sm z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg">AI Farming Expert</h2>
            <p className="text-sm text-green-600 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span> Online
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </header>

      <div className="flex-1 overflow-y-auto bg-surface border-x border-gray-100 p-4 space-y-6">
        
        {/* Messages */}
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center mt-auto ${msg.type === 'ai' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
              {msg.type === 'ai' ? <Bot className="w-6 h-6" /> : <User className="w-5 h-5" />}
            </div>
            <div className={`p-4 rounded-3xl ${msg.type === 'ai' ? 'bg-white border border-gray-100 rounded-bl-sm text-gray-800 shadow-sm' : 'bg-primary text-white rounded-br-sm'}`}>
              <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.text}</p>
              <p className={`text-[10px] mt-2 font-medium ${msg.type === 'ai' ? 'text-gray-400' : 'text-primary-lightest'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-t-0 border-gray-100 p-4 rounded-b-3xl shadow-sm z-10 relative space-y-4">
        {/* Suggestions */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {suggestions.map((text, i) => (
            <button key={i} className="whitespace-nowrap px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              {text}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-end">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-3xl flex items-center p-1.5 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
            <Button variant="ghost" size="icon" className="shrink-0 text-gray-500 rounded-full hover:bg-gray-200">
              <Camera className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0 text-gray-500 rounded-full hover:bg-gray-200 mr-2">
              <Paperclip className="w-5 h-5" />
            </Button>
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me anything about farming..."
              className="flex-1 bg-transparent border-none outline-none resize-none max-h-32 min-h-[44px] py-3 text-[15px] text-gray-800 placeholder:text-gray-400"
              rows={1}
            />
            {query.length === 0 ? (
              <Button size="icon" className="shrink-0 rounded-full bg-green-100 text-green-700 hover:bg-green-200 w-11 h-11">
                <Mic className="w-5 h-5" />
              </Button>
            ) : (
              <Button size="icon" className="shrink-0 rounded-full w-11 h-11">
                <Send className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
