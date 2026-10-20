import React from 'react';

export default function PromoSection({ promotions = [] }) {
    if (!promotions || !promotions.length) return null;
    return (
        <div className="pl-4 py-4">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Promo Spesial</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 pr-4 hide-scrollbar">
                {promotions.map((promo, idx) => (
                    <div key={idx} className="min-w-[280px] h-36 bg-white rounded-xl shadow-sm overflow-hidden flex-shrink-0 relative">
                        <img src={promo.image || "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"} alt={promo.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                            <span className="text-white font-bold text-sm">{promo.title || 'Promo Diskon'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
