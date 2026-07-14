import React from 'react';
import { Image, Video, MapPin, MoreHorizontal, Heart, MessageCircle, Share2, Sprout, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export default function Community() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      
      <header className="flex items-center justify-between sticky top-0 md:relative bg-surface/80 backdrop-blur-md z-30 py-2 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Farmer Community</h1>
      </header>

      {/* Create Post */}
      <Card className="shadow-sm border-gray-100">
        <CardContent className="p-4 sm:p-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-lg">R</span>
            </div>
            <div className="flex-1 space-y-4">
              <textarea 
                placeholder="What's happening on your farm? Ask a question or share an update..."
                className="w-full bg-transparent resize-none outline-none text-gray-700 text-lg placeholder:text-gray-400 min-h-[80px]"
              />
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary rounded-full">
                    <Image className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary rounded-full hidden sm:flex">
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary rounded-full">
                    <MapPin className="w-5 h-5" />
                  </Button>
                </div>
                <Button className="rounded-full px-6">Post</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feed Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        <button className="pb-3 border-b-2 border-primary font-medium text-gray-900">Trending</button>
        <button className="pb-3 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">Latest</button>
        <button className="pb-3 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">My District</button>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        <PostCard 
          name="Sukhbir Singh"
          location="Amritsar, Punjab"
          time="2 hours ago"
          avatar="S"
          content="My wheat crop is 45 days old. Noticed some yellowing on the lower leaves. Should I apply Urea now or wait for the rain forecasted next week?"
          image="bg-yellow-100"
          likes={24}
          comments={8}
          cropTag="Wheat"
        />
        
        <PostCard 
          name="Amit Patel"
          location="Surat, Gujarat"
          time="5 hours ago"
          avatar="A"
          content="Successfully installed the new drip irrigation system on my 2-acre plot. The government subsidy process was smooth this time! Ask me anything if you need help applying."
          likes={156}
          comments={42}
          cropTag="Irrigation"
        />
      </div>

    </div>
  );
}

function PostCard({ name, location, time, avatar, content, image, likes, comments, cropTag }: any) {
  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader className="p-4 sm:p-6 pb-2 flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
            <span className="text-gray-600 font-semibold">{avatar}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{name}</h3>
            <p className="text-xs text-gray-500">{location} • {time}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-2">
        {cropTag && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium mb-3">
            <Sprout className="w-3.5 h-3.5" />
            {cropTag}
          </div>
        )}
        
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4 whitespace-pre-wrap">
          {content}
        </p>
        
        {image && (
          <div className={`w-full aspect-video ${image} rounded-xl mb-4 flex items-center justify-center`}>
            <Image className="w-12 h-12 text-black/10" />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex gap-1 sm:gap-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500 rounded-full px-3">
              <Heart className="w-5 h-5 mr-2" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary rounded-full px-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              {comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-600 rounded-full px-3">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
