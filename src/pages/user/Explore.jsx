import React, { useState } from 'react';
import BottomNavbar from '../../components/common/BottomNavbar';
import { Search } from 'lucide-react';

const categories = ['All', 'Beach', 'City', 'Adventure', 'Nature', 'Culture'];

const featuredPlaces = [
  {
    id: 1,
    title: 'Bali',
    country: 'Indonesia',
    price: '$480',
    rating: '4.8',
    tag: 'Beach',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Kyoto',
    country: 'Japan',
    price: '$620',
    rating: '4.9',
    tag: 'Culture',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
  },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPlaces =
    activeCategory === 'All'
      ? featuredPlaces
      : featuredPlaces.filter((place) => place.tag === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="px-4 pt-6 pb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-blue-600 text-xs font-bold uppercase tracking-wider">Discover</h2>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Explore</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center">
            A
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-3 mb-6">
          <Search size={20} className="text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search destinations..." 
            className="w-full bg-transparent focus:outline-none text-slate-700 text-sm"
          />
        </div>

        <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-blue-50 text-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-900">Popular destinations</h2>
          <button className="text-sm font-semibold text-blue-600">See all</button>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="min-w-[200px] h-64 rounded-2xl overflow-hidden relative flex-shrink-0">
              <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center">
                <span className="text-xs font-bold text-slate-900">★ {place.rating}</span>
              </div>
              
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white text-xl font-bold leading-tight">{place.title}</h3>
                <p className="text-slate-200 text-sm">{place.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Explore;
