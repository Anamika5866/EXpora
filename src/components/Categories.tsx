
import React from 'react';
import { Tag, Utensils, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryProps {
  icon: React.ReactNode;
  label: string;
  count: number;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryBadge: React.FC<CategoryProps> = ({ icon, label, count, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center space-x-2 px-4 py-2 rounded-full transition-all",
        "border border-gray-200 hover:border-vivid-purple",
        isActive ? "bg-vivid-purple text-white" : "bg-white text-gray-700 hover:bg-soft-purple-50"
      )}
    >
      {icon}
      <span>{label}</span>
      <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
        {count}
      </span>
    </button>
  );
};

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  const categories = [
    { icon: <Map className="w-4 h-4" />, label: "Travel", count: 128 },
    { icon: <Utensils className="w-4 h-4" />, label: "Food", count: 85 },
    { icon: <Tag className="w-4 h-4" />, label: "Lifestyle", count: 64 },
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Explore Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <CategoryBadge
              key={category.label}
              {...category}
              isActive={activeCategory === category.label}
              onClick={() => setActiveCategory(category.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
