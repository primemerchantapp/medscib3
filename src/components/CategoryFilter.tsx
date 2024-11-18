import React from 'react';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  category: string;
  onCategoryChange: (value: string) => void;
}

export default function CategoryFilter({ category, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="relative">
      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <select
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="Consultation">Consultation</option>
        <option value="Follow-up">Follow-up</option>
        <option value="Surgery">Surgery</option>
        <option value="Insurance">Insurance</option>
      </select>
    </div>
  );
}