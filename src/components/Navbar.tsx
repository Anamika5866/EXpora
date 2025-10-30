import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, PlusCircle, Search, User, Menu, X, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleAuthClick = () => {
    navigate('/auth');
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Discover', path: '/feed' },
    { icon: PlusCircle, label: 'Create', path: '/create' },
    { icon: Video, label: 'Pods', path: '/pods-feed' },
    { icon: User, label: 'Profile', path: '/profile/:userId' },
  ];

  return (
    <>
      {/* Desktop navigation */}
      {!isMobile && (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-6 py-3">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-gradient">Expora</span>
            </Link>
            
            <div className="flex space-x-6">
              {menuItems.map((item, idx) => (
                <Link 
                  key={idx}
                  to={item.path}
                  className={cn(
                    "flex items-center text-gray-600 hover:text-vivid-purple transition-colors px-3 py-2 rounded-md",
                    isActive(item.path) && "text-vivid-purple bg-soft-purple-50"
                  )}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="border-vivid-purple text-vivid-purple hover:bg-soft-purple-50"
                onClick={handleAuthClick}
              >
                Log In
              </Button>
              <Button 
                className="bg-vivid-purple hover:bg-purple-700"
                onClick={handleAuthClick}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile navigation */}
      {isMobile && (
        <>
          {/* Top Nav with Logo and Menu Button */}
          <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-4 py-3">
            <div className="flex justify-between items-center">
              <Link to="/" className="font-bold text-xl text-gradient">
                Expora
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-soft-purple-50 hover:text-vivid-purple"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}>
              <div 
                className="absolute top-14 right-0 bg-white w-64 h-screen shadow-lg p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col space-y-4 mt-2">
                  {menuItems.map((item, idx) => (
                    <Link 
                      key={idx}
                      to={item.path}
                      className={cn(
                        "flex items-center text-gray-600 hover:text-vivid-purple transition-colors p-3 rounded-md",
                        isActive(item.path) && "text-vivid-purple bg-soft-purple-50"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex flex-col space-y-3">
                      <Button 
                        variant="outline" 
                        className="border-vivid-purple text-vivid-purple hover:bg-soft-purple-50 w-full"
                        onClick={handleAuthClick}
                      >
                        Log In
                      </Button>
                      <Button 
                        className="bg-vivid-purple hover:bg-purple-700 w-full"
                        onClick={handleAuthClick}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Tab Bar */}
          <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex justify-around py-3">
              {menuItems.map((item, idx) => (
                <Link 
                  key={idx}
                  to={item.path} 
                  className={cn(
                    "flex flex-col items-center text-gray-600 hover:text-vivid-purple transition-colors",
                    isActive(item.path) && "text-vivid-purple"
                  )}
                >
                  <item.icon size={24} />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}

      {/* Content padding to account for fixed navbars */}
      <div className={cn(
        "w-full", 
        isMobile ? "pb-16 pt-14" : "pt-16"
      )}></div>
    </>
  );
};

export default Navbar;
