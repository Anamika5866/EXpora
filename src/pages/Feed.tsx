import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, BookmarkIcon } from 'lucide-react';
import Categories from "@/components/Categories";

const Feed: React.FC = () => {
  // Mock data for experiences - would come from an API in a real app
  const experiences = [
    {
      id: '1',
      author: { name: 'Maria Lopez', avatar: 'https://www.pexels.com/photo/woman-walking-on-a-train-rail-600107/' },
      title: 'Backpacking through Southeast Asia',
      content: 'After months of planning, I finally took the leap and embarked on a solo backpacking journey through Thailand, Vietnam, and Cambodia. The experience was truly transformative...',
      category: 'Travel',
      image: 'https://www.pexels.com/photo/group-of-people-standing-beside-body-of-water-2672979',
      likes: 124,
      comments: 18,
      createdAt: '2 days ago'
    },
    {
      id: '2',
      author: { name: 'David Chen', avatar: '' },
      title: 'My First Tech Conference',
      content: 'Attending my first tech conference was overwhelming at first, but I quickly found my community. Here are my top takeaways and networking tips for first-timers...',
      category: 'Career',
      image: '',
      likes: 87,
      comments: 12,
      createdAt: '5 days ago'
    }
  ];

  return (
    <div className="container px-4 py-16 pt-24 pb-32">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-charcoal">Discover Experiences</h1>
        <div className="relative w-full max-w-sm ml-4">
          <Input 
            placeholder="Search experiences..." 
            className="pl-10"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <Categories />

      <Tabs defaultValue="trending" className="mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollArea className="h-[calc(100vh-230px)]">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={experience.author.avatar} />
                    <AvatarFallback className="bg-vivid-purple text-white">
                      {experience.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{experience.author.name}</div>
                    <div className="text-xs text-gray-500">{experience.createdAt}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {experience.image && (
                  <div className="aspect-video w-full bg-gray-100">
                    {/* In a real app, this would be an actual image */}
                    <div className="h-full w-full flex items-center justify-center bg-gray-200">
                      {/* Placeholder for image */}
                      <span className="text-gray-400">Experience Image</span>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
                  <div className="mb-2">
                    <span className="inline-block bg-soft-purple-100 text-vivid-purple rounded-full px-3 py-1 text-xs font-medium">
                      {experience.category}
                    </span>
                  </div>
                  <p className="text-gray-700 line-clamp-3">{experience.content}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-500 hover:text-vivid-purple">
                    <Heart size={18} />
                    <span>{experience.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-500 hover:text-vivid-purple">
                    <MessageCircle size={18} />
                    <span>{experience.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-500 hover:text-vivid-purple">
                    <Share2 size={18} />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-vivid-purple">
                  <BookmarkIcon size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Feed;
