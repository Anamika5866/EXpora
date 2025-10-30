import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, Globe, Edit, MessageCircle, UserPlus, Briefcase, 
  Heart, Share2, Play, TrendingUp, Award, Target, Users,
  Sparkles, Video, FileText, Bookmark, Calendar, BarChart3
} from "lucide-react";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock user data - would be fetched from API
  const mockUserData = {
    id: userId,
    name: "Alex Johnson",
    username: "alexj",
    tagline: "Building the future, one experience at a time",
    bio: "Passionate entrepreneur, storyteller, and tech innovator. I share my journey of building startups, learning from failures, and celebrating wins. Open to mentorship and collaboration.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    location: "San Francisco, CA",
    website: "alexjohnson.com",
    currentRole: "Founder & CEO at TechVentures",
    interests: ["AI", "Entrepreneurship", "Design Thinking", "Public Speaking", "Mentorship"],
    collaborationTag: "Open to Mentorship",
    followers: 8420,
    following: 2310,
    exploraScore: 87,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Product Strategy", level: 85 },
      { name: "Public Speaking", level: 92 },
      { name: "AI/ML", level: 75 },
      { name: "Fundraising", level: 88 }
    ],
    pods: [
      { 
        id: "1", 
        title: "From Failure to Success: My Startup Journey",
        thumbnail: "https://images.unsplash.com/photo-1559223607-9a43e9ed77c3?w=400",
        duration: "12:45",
        views: 15420,
        likes: 1240,
        mood: "Motivational",
        tags: ["#StartupJourney", "#Resilience", "#Entrepreneurship"],
        date: "2 days ago"
      },
      { 
        id: "2", 
        title: "AI Ethics: Building Responsible Technology",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
        duration: "18:20",
        views: 23100,
        likes: 2140,
        mood: "Reflective",
        tags: ["#AI", "#Ethics", "#Technology"],
        date: "1 week ago"
      },
      { 
        id: "3", 
        title: "The Power of Mentorship in Tech",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
        duration: "15:30",
        views: 18750,
        likes: 1680,
        mood: "Hopeful",
        tags: ["#Mentorship", "#Leadership", "#Growth"],
        date: "2 weeks ago"
      }
    ],
    experiences: [
      { 
        id: "1", 
        title: "How I Raised $2M Without Connections", 
        category: "Career", 
        likes: 3420,
        comments: 187,
        date: "3 days ago",
        excerpt: "The unconventional path to seed funding..."
      },
      { 
        id: "2", 
        title: "Lessons from Failing 3 Startups", 
        category: "Personal Growth", 
        likes: 5670,
        comments: 342,
        date: "1 week ago",
        excerpt: "What they don't tell you in business school..."
      },
      { 
        id: "3", 
        title: "Building in Public: My 90-Day Experiment", 
        category: "Business", 
        likes: 2890,
        comments: 156,
        date: "2 weeks ago",
        excerpt: "Transparency as a growth strategy..."
      }
    ],
    milestones: [
      { year: "2023", event: "Founded TechVentures", icon: "🚀" },
      { year: "2022", event: "TED Talk at TEDxSF", icon: "🎤" },
      { year: "2021", event: "Exited Previous Startup", icon: "💰" },
      { year: "2020", event: "Named 30 Under 30", icon: "🏆" }
    ],
    analytics: {
      profileViews: 12450,
      engagementRate: 8.7,
      topContent: "AI Ethics Pod",
      weeklyGrowth: 12.3
    }
  };

  const isOwnProfile = userId === "me";

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image with Gradient Overlay */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={mockUserData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container max-w-6xl px-4 -mt-24 relative z-10 pb-32">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-shrink-0">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-background shadow-purple ring-4 ring-vivid-purple/30 animate-pulse-soft">
                <AvatarImage src={mockUserData.avatar} alt={mockUserData.name} />
                <AvatarFallback className="bg-vivid-purple text-primary-foreground text-3xl">
                  {mockUserData.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-vivid-purple text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
                {mockUserData.exploraScore}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">{mockUserData.name}</h1>
                <p className="text-muted-foreground mb-2">@{mockUserData.username}</p>
                <p className="text-lg text-foreground/80 mb-3 max-w-2xl">{mockUserData.tagline}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {mockUserData.location}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    {mockUserData.website}
                  </div>
                </div>

                <Badge variant="secondary" className="mb-4">
                  <Users className="w-3 h-3 mr-1" />
                  {mockUserData.collaborationTag}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {isOwnProfile ? (
                  <>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Sparkles className="w-4 h-4" />
                      AI Assistant
                    </Button>
                  </>
                ) : (
                  <>
                    <Button size="sm" className="gap-2 bg-vivid-purple hover:bg-vivid-purple/90">
                      <UserPlus className="w-4 h-4" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{mockUserData.followers.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{mockUserData.following.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{mockUserData.pods.length}</div>
                <div className="text-sm text-muted-foreground">Pods</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Snapshot */}
        <Card className="mb-6 card-hover">
          <CardContent className="p-6">
            <div className="flex items-start gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-vivid-purple mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Current Role</h3>
                <p className="text-muted-foreground">{mockUserData.currentRole}</p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-vivid-purple" />
                Interests & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {mockUserData.interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="bg-accent/50">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-vivid-purple" />
                Skill Graph
              </h3>
              <div className="space-y-3">
                {mockUserData.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pods">
              <Video className="w-4 h-4 mr-2" />
              Pods
            </TabsTrigger>
            <TabsTrigger value="experiences">
              <FileText className="w-4 h-4 mr-2" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Video className="w-5 h-5 text-vivid-purple" />
                  Featured Pods
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockUserData.pods.slice(0, 2).map((pod) => (
                    <Link key={pod.id} to={`/pod/${pod.id}`}>
                      <Card className="card-hover overflow-hidden border-none shadow-card">
                        <div className="relative">
                          <img src={pod.thumbnail} alt={pod.title} className="w-full h-48 object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <Badge className="bg-background/80 text-foreground mb-2">
                              {pod.duration}
                            </Badge>
                          </div>
                          <Button size="sm" className="absolute top-2 right-2 rounded-full w-10 h-10 p-0 bg-vivid-purple/80 hover:bg-vivid-purple">
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{pod.title}</h4>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                            <span>{pod.views.toLocaleString()} views</span>
                            <span>{pod.date}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {pod.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-vivid-purple" />
                  Journey Map
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUserData.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-3xl">{milestone.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{milestone.event}</div>
                        <div className="text-sm text-muted-foreground">{milestone.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pods Tab */}
          <TabsContent value="pods">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUserData.pods.map((pod) => (
                <Link key={pod.id} to={`/pod/${pod.id}`}>
                  <Card className="card-hover overflow-hidden border-none shadow-card">
                    <div className="relative">
                      <img src={pod.thumbnail} alt={pod.title} className="w-full h-48 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                        <Badge className="bg-background/80 text-foreground">
                          {pod.duration}
                        </Badge>
                        <Badge variant="secondary" className="bg-background/80">
                          {pod.mood}
                        </Badge>
                      </div>
                      <Button size="sm" className="absolute top-2 right-2 rounded-full w-10 h-10 p-0 bg-vivid-purple/80 hover:bg-vivid-purple">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{pod.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Play className="w-3 h-3" />
                            {pod.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {pod.likes.toLocaleString()}
                          </span>
                        </div>
                        <span>{pod.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {pod.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Experiences Tab */}
          <TabsContent value="experiences">
            <div className="space-y-4">
              {mockUserData.experiences.map((exp) => (
                <Card key={exp.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                        <p className="text-muted-foreground mb-3">{exp.excerpt}</p>
                        <Badge variant="outline">{exp.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {exp.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {exp.comments}
                        </span>
                        <span>{exp.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-vivid-purple" />
                    Profile Performance
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Profile Views</span>
                    <span className="text-2xl font-bold text-foreground">
                      {mockUserData.analytics.profileViews.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Engagement Rate</span>
                    <span className="text-2xl font-bold text-vivid-purple">
                      {mockUserData.analytics.engagementRate}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekly Growth</span>
                    <span className="text-2xl font-bold text-green-600">
                      +{mockUserData.analytics.weeklyGrowth}%
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-vivid-purple" />
                    Expora Score Breakdown
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Content Quality</span>
                      <span className="text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Engagement</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Collaboration</span>
                      <span className="text-muted-foreground">83%</span>
                    </div>
                    <Progress value={83} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Growth</span>
                      <span className="text-muted-foreground">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-vivid-purple" />
                    AI Growth Insights
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-accent/30 rounded-lg border border-border">
                    <p className="text-sm text-foreground">
                      🎯 <strong>Top Performing Content:</strong> Your AI Ethics Pod gained 40% more engagement than average. 
                      Consider creating more content on emerging tech topics.
                    </p>
                  </div>
                  <div className="p-4 bg-accent/30 rounded-lg border border-border">
                    <p className="text-sm text-foreground">
                      📈 <strong>Growth Opportunity:</strong> Posting consistently on Tuesdays and Thursdays has shown 
                      a 25% higher engagement rate. Consider this for your content calendar.
                    </p>
                  </div>
                  <div className="p-4 bg-accent/30 rounded-lg border border-border">
                    <p className="text-sm text-foreground">
                      🤝 <strong>Network Expansion:</strong> You share 12 common interests with 340 users. 
                      Connect with similar creators to grow your community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;