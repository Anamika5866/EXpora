import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Camera, Heart, Globe2, Map, Users, Footprints, Star, MessageCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  // Mock experiences data
  const allExperiences = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      title: "Solo backpacking through Southeast Asia",
      category: "Travel",
      content: "An incredible journey of self-discovery and adventure across Thailand, Vietnam, and Cambodia.",
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      title: "Starting my own photography business",
      category: "Personal",
      content: "From hobby to career - how I built my photography business from scratch.",
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      author: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      title: "Finding balance in a busy world",
      category: "Lifestyle",
      content: "My journey to discovering mindfulness and creating a healthier work-life balance.",
      likes: 456,
      comments: 78
    },
    {
      id: 4,
      author: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      title: "Hiking the Pacific Crest Trail",
      category: "Travel",
      content: "2,650 miles of breathtaking views, challenges, and unforgettable moments.",
      likes: 567,
      comments: 92
    },
    {
      id: 5,
      author: "Maria Santos",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      title: "Minimalist living changed my life",
      category: "Lifestyle",
      content: "How decluttering my space helped me find mental clarity and happiness.",
      likes: 345,
      comments: 56
    },
    {
      id: 6,
      author: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      title: "Overcoming failure and starting again",
      category: "Personal",
      content: "My story of business failure, recovery, and building something better.",
      likes: 678,
      comments: 103
    },
    {
      id: 7,
      author: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
      title: "Road trip across America",
      category: "Travel",
      content: "3 months, 15,000 miles, and countless memories exploring the USA.",
      likes: 432,
      comments: 67
    },
    {
      id: 8,
      author: "Tom Harris",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Learning to code at 40",
      category: "Personal",
      content: "It's never too late to start something new - my journey into tech.",
      likes: 521,
      comments: 89
    }
  ];

  // Filter experiences based on search and category
  const filteredExperiences = React.useMemo(() => {
    return allExperiences.filter(exp => {
      const matchesSearch = searchQuery === '' || 
        exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || exp.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const showResults = searchQuery !== '' || selectedCategory !== null;

  const featuredStories = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      alt: "Person overcoming challenges",
      title: "Resilience Stories",
      caption: "How people turned setbacks into comebacks."
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      alt: "Person reflecting on failures",
      title: "Failures & Comebacks",
      caption: "Lessons from the toughest falls — and the rise after."
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80",
      alt: "Elderly person sharing wisdom",
      title: "Life Lessons",
      caption: "Every scar has wisdom. Every journey has meaning."
    },
    {
      src: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=800&q=80",
      alt: "People celebrating cultural traditions",
      title: "Cultural Journeys",
      caption: "Stories that connect traditions, identities, and change."
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      alt: "Student working late at night",
      title: "Student Struggles",
      caption: "Exams, rejections, late nights — and the path to breakthrough."
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      alt: "Entrepreneurs brainstorming",
      title: "Entrepreneurship & Startups",
      caption: "From failed pitches to scaling dreams into reality."
    },
    {
      src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      alt: "Person in peaceful meditation",
      title: "Mental Health & Healing",
      caption: "Raw stories of vulnerability, strength, and inner growth."
    },
    {
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80",
      alt: "Person on unique life path",
      title: "The Path Less Traveled",
      caption: "Journeys of those who chose different, and found meaning."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Adventure Traveler",
      content: "This platform has connected me with fellow travelers who share my passion for exploring off-beat paths. The experiences shared here have inspired my latest journey!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Photography Enthusiast",
      content: "I've discovered amazing photography spots through the experiences shared here. This community has truly expanded my creative horizons.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Cultural Explorer",
      content: "The diverse perspectives shared on this platform have enriched my understanding of different cultures. Every story offers a new lens to view the world.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center py-28 px-4 text-center min-h-[70vh]">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 z-10"
            style={{ mixBlendMode: 'multiply' }}
          ></div>
          <img 
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1500&q=80" 
            alt="Experience Hub Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Explore. <span className="text-vivid-purple bg-white/10 px-2 py-1 rounded-lg backdrop-blur-sm">Share</span>. Connect.
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up drop-shadow-md">
            Discover extraordinary experiences, share your adventures, and connect with fellow explorers on Expora.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <Button 
              className="bg-vivid-purple hover:bg-purple-700 animate-fade-in text-lg group"
              size="lg"
              onClick={() => navigate('/auth')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="animate-fade-in bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/feed')}
            >
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Experiences/Images Section */}
      <section className="py-16 px-4 bg-soft-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Journeys That Inspire</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Discover real stories of resilience, growth, failures, and triumphs from people around the world</p>
          
          <div className="mt-10">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselPrevious className="hidden md:flex left-0 translate-x-0" />
              <CarouselContent>
                {featuredStories.map((story, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-2">
                      <Card className="overflow-hidden border-0 shadow-lg rounded-xl transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
                        <div className="aspect-[3/4] relative">
                          <img 
                            src={story.src} 
                            alt={story.alt}
                            className="object-cover w-full h-full rounded-t-xl transition-transform duration-300 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                          
                          {/* Content overlay */}
                          <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                            <h3 className="font-bold text-lg mb-1">{story.title}</h3>
                            <p className="text-sm text-white/90 leading-relaxed">{story.caption}</p>
                          </div>
                          
                          {/* Hover button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Button 
                              className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm font-semibold shadow-lg"
                              onClick={() => navigate('/feed')}
                            >
                              Read Story →
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="hidden md:flex right-0 translate-x-0" />
            </Carousel>
          </div>
          
          {/* Discover Categories Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Discover Experiences</h3>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search experiences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-vivid-purple focus:border-vivid-purple"
                />
              </div>

              {/* Explore Categories */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Explore Categories</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    onClick={() => setSelectedCategory(selectedCategory === 'Travel' ? null : 'Travel')}
                    className={`flex items-center p-4 rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === 'Travel' 
                        ? 'bg-vivid-purple text-white' 
                        : 'bg-soft-purple-50 hover:bg-soft-purple-100'
                    }`}
                  >
                    <Map className={`h-6 w-6 mr-3 ${selectedCategory === 'Travel' ? 'text-white' : 'text-vivid-purple'}`} />
                    <span className="font-medium">Travel</span>
                    <span className={`ml-auto text-sm ${selectedCategory === 'Travel' ? 'text-white/80' : 'text-gray-500'}`}>
                      {allExperiences.filter(exp => exp.category === 'Travel').length}
                    </span>
                  </div>
                  <div 
                    onClick={() => setSelectedCategory(selectedCategory === 'Lifestyle' ? null : 'Lifestyle')}
                    className={`flex items-center p-4 rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === 'Lifestyle' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-soft-green hover:bg-green-100'
                    }`}
                  >
                    <Heart className={`h-6 w-6 mr-3 ${selectedCategory === 'Lifestyle' ? 'text-white' : 'text-green-600'}`} />
                    <span className="font-medium">Lifestyle</span>
                    <span className={`ml-auto text-sm ${selectedCategory === 'Lifestyle' ? 'text-white/80' : 'text-gray-500'}`}>
                      {allExperiences.filter(exp => exp.category === 'Lifestyle').length}
                    </span>
                  </div>
                  <div 
                    onClick={() => setSelectedCategory(selectedCategory === 'Personal' ? null : 'Personal')}
                    className={`flex items-center p-4 rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === 'Personal' 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-soft-peach hover:bg-orange-100'
                    }`}
                  >
                    <Users className={`h-6 w-6 mr-3 ${selectedCategory === 'Personal' ? 'text-white' : 'text-orange-600'}`} />
                    <span className="font-medium">Personal</span>
                    <span className={`ml-auto text-sm ${selectedCategory === 'Personal' ? 'text-white/80' : 'text-gray-500'}`}>
                      {allExperiences.filter(exp => exp.category === 'Personal').length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              {showResults && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {filteredExperiences.length} Results Found
                    </h4>
                    {(searchQuery || selectedCategory) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory(null);
                        }}
                      >
                        Clear Filters
                      </Button>
                    )}
                  </div>
                  
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {filteredExperiences.length > 0 ? (
                      filteredExperiences.map((experience) => (
                        <Card key={experience.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/feed')}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <img 
                                src={experience.avatar} 
                                alt={experience.author}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h5 className="font-semibold text-gray-900">{experience.author}</h5>
                                  <span className="text-xs px-2 py-1 bg-soft-purple-50 text-vivid-purple rounded-full">
                                    {experience.category}
                                  </span>
                                </div>
                                <h4 className="font-medium text-gray-800 mb-2">{experience.title}</h4>
                                <p className="text-sm text-gray-600 mb-3">{experience.content}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Heart className="h-4 w-4" />
                                    {experience.likes}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MessageCircle className="h-4 w-4" />
                                    {experience.comments}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <Compass className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No experiences found matching your search.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {!showResults && (
                <div className="mt-6 flex gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/feed')}
                    className="bg-vivid-purple hover:bg-purple-700"
                  >
                    Explore All Stories
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/create-experience')}
                  >
                    Share Your Story
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced visual design */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Share Your Experiences?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-soft-purple-50 p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-vivid-purple to-purple-400 text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">Build meaningful connections with like-minded individuals who share your interests and passions across the globe.</p>
            </div>
            
            <div className="bg-soft-green p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-400 text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Camera className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspire</h3>
              <p className="text-gray-600">Your unique stories and perspectives can motivate and inspire others to pursue new adventures and opportunities.</p>
            </div>
            
            <div className="bg-soft-peach p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Grow</h3>
              <p className="text-gray-600">Reflect on your experiences and learn from others to foster personal development and expand your horizons.</p>
            </div>
            
            <div className="bg-soft-blue p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Map className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover</h3>
              <p className="text-gray-600">Find hidden gems and travel destinations through authentic experiences shared by real travelers around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-soft-purple-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="mt-4 flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with improved gradient background */}
      <section className="bg-gradient-to-r from-vivid-purple to-purple-700 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore with Expora?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our growing community of adventurers, storytellers, and experience seekers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/auth')}
              className="bg-white text-vivid-purple hover:bg-gray-100 border-white sm:w-auto w-full"
              size="lg"
            >
              Sign Up Now
            </Button>
            <Button 
              onClick={() => navigate('/feed')}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white sm:w-auto w-full"
              size="lg"
            >
              Browse Experiences
            </Button>
          </div>
        </div>
      </section>

      {/* Image Collage */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience the World</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" 
                     alt="Mountain sunset" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=600&q=80" 
                     alt="Beach view" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80" 
                     alt="Desert adventure" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1519411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80" 
                     alt="Mountain village" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80" 
                     alt="Forest path" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80" 
                     alt="Northern lights" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80" 
                     alt="Road trip" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img className="h-auto max-w-full rounded-lg object-cover transition-all duration-300 hover:scale-105" 
                     src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=600&q=80" 
                     alt="Ocean sunset" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Stats Section */}
      <section className="py-16 px-4 bg-soft-purple-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-vivid-purple mb-2">2.5K+</h3>
              <p className="text-gray-600">Shared Experiences</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-vivid-purple mb-2">120+</h3>
              <p className="text-gray-600">Countries Covered</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-vivid-purple mb-2">15K+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-vivid-purple mb-2">85%</h3>
              <p className="text-gray-600">Found New Adventures</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
