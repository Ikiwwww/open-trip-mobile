import React from 'react';
import { MapPin } from 'lucide-react';

export default function DestinationSection({ destinations = [] }) {
    if (!destinations || !destinations.length) return null;
    return (
        <div className="px-4 py-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-800">Destinasi Populer</h2>
                <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {destinations.map((dest, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                        <div className="h-32 relative">
                            <img src={dest.image || "https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt={dest.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-sm text-slate-800 line-clamp-1">{dest.name || 'Destinasi'}</h3>
                                <div className="flex items-center text-xs text-slate-500 mt-1">
                                    <MapPin size={12} className="mr-1" />
                                    <span className="truncate">{dest.location || 'Indonesia'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
