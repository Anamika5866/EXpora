
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Home, Info, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Expora
            </Link>
            <p className="text-gray-600">
              Discover extraordinary experiences, share your adventures, and connect with fellow explorers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-vivid-purple flex items-center gap-2">
                  <Home className="w-4 h-4" /> Home
                </Link>
              </li>
              <li>
                <Link to="/feed" className="text-gray-600 hover:text-vivid-purple">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-600 hover:text-vivid-purple">
                  Share Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/feed?category=travel" className="text-gray-600 hover:text-vivid-purple">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/feed?category=food" className="text-gray-600 hover:text-vivid-purple">
                  Food & Dining
                </Link>
              </li>
              <li>
                <Link to="/feed?category=lifestyle" className="text-gray-600 hover:text-vivid-purple">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@expora.com" className="text-gray-600 hover:text-vivid-purple flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contact@expora.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-vivid-purple flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (123) 456-7890
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-vivid-purple flex items-center gap-2">
                  <Info className="w-4 h-4" /> About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Expora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
