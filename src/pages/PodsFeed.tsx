import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Clock, Heart, Share2, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockPods = [
  {
    id: 1,
    title: "My Journey from Failure to Success",
    author: "Sarah Johnson",
    duration: "5:32",
    thumbnail: "/lovable-uploads/541b64f0-e8f4-4229-ab73-0710edaeb70c.png",
    tags: ["#OvercomingFear", "#StartupJourney"],
    mood: "Motivational",
    likes: 234,
    sentiment: "This talk reflects resilience and self-growth."
  },
  {
    id: 2,
    title: "Lessons from Traveling Solo",
    author: "Anonymous",
    duration: "8:15",
    thumbnail: "/lovable-uploads/68ec9cdf-0682-44c4-ab00-c39563e94e12.png",
    tags: ["#Travel", "#SelfDiscovery"],
    mood: "Reflective",
    likes: 189,
    sentiment: "A heartfelt reflection on personal growth."
  },
  {
    id: 3,
    title: "Why I'm Grateful for My Struggles",
    author: "Michael Chen",
    duration: "6:47",
    thumbnail: "/lovable-uploads/7bcfc1dc-61c4-4ead-b94b-60c7a6442ce7.png",
    tags: ["#Gratitude", "#MentalHealth"],
    mood: "Grateful",
    likes: 412,
    sentiment: "An inspiring message about finding strength in adversity."
  },
  {
    id: 4,
    title: "The Day Everything Changed",
    author: "Emma Davis",
    duration: "4:23",
    thumbnail: "/lovable-uploads/b503e15d-8653-4a11-a5d7-44480eb74edd.png",
    tags: ["#LifeChanging", "#Courage"],
    mood: "Hopeful",
    likes: 567,
    sentiment: "A powerful story about transformation and hope."
  }
];

export default function PodsFeed() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const filteredPods = mockPods.filter(pod => {
    const matchesSearch = pod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pod.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesMood = !selectedMood || pod.mood === selectedMood;
    return matchesSearch && matchesMood;
  });

  const moods = ["Motivational", "Hopeful", "Reflective", "Grateful", "Sad"];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Expora Pods</h1>
          <p className="text-muted-foreground">Watch inspiring stories from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search pods by title or tags..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedMood === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedMood(null)}
            >
              All
            </Button>
            {moods.map((mood) => (
              <Button
                key={mood}
                variant={selectedMood === mood ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMood(mood)}
              >
                {mood}
              </Button>
            ))}
          </div>
        </div>

        {/* Pods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPods.map((pod) => (
            <Card
              key={pod.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/pod/${pod.id}`)}
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={pod.thumbnail}
                  alt={pod.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {pod.duration}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{pod.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">by {pod.author}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {pod.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-xs">
                    {pod.mood}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                  {pod.sentiment}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    {pod.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No pods found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
