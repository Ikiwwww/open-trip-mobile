import React from 'react';

export default function Hero({ hero }) {
    if (!hero) return null;
    return (
        <div className="relative w-full h-64 bg-slate-200">
            <img src={hero.image || "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} alt={hero.title || 'Hero'} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4 text-white pb-10">
                    <h1 className="text-2xl font-bold mb-1">{hero.title || 'Jelajahi Dunia'}</h1>
                    <p className="text-sm">{hero.subtitle || 'Temukan destinasi impianmu bersama AyoTrip'}</p>
                </div>
            </div>
        </div>
    );
}
