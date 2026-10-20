import React from 'react';
import { Star } from 'lucide-react';

export default function RecommendationSection({ recommendations = [] }) {
    if (!recommendations || !recommendations.length) return null;
    return (
        <div className="pl-4 py-4">
            <div className="flex justify-between items-center mb-4 pr-4">
                <h2 className="text-lg font-bold text-slate-800">Rekomendasi Untukmu</h2>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4 pr-4 hide-scrollbar">
                {recommendations.map((rec, idx) => (
                    <div key={idx} className="min-w-[200px] w-[200px] bg-white rounded-xl shadow-sm overflow-hidden flex-shrink-0">
                        <img src={rec.image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt={rec.name} className="w-full h-32 object-cover" />
                        <div className="p-3">
                            <h3 className="font-bold text-sm text-slate-800 line-clamp-1">{rec.name || 'Tempat Wisata'}</h3>
                            <div className="flex items-center mt-1">
                                <Star size={12} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                                <span className="text-xs font-medium ml-1">{rec.rating || '4.8'}</span>
                                <span className="text-xs text-slate-400 ml-1">({rec.reviews || 120} ulasan)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
