import React from 'react';
import { Calendar, Users } from 'lucide-react';

export default function TripSection({ trips = [] }) {
    if (!trips || !trips.length) return null;
    return (
        <div className="px-4 py-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-800">Open Trip Terbaru</h2>
                <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
            </div>
            <div className="flex flex-col gap-4">
                {trips.map((trip, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden flex p-3 gap-3">
                        <img src={trip.image || "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt={trip.title} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                        <div className="flex-1 flex flex-col justify-between py-1 overflow-hidden">
                            <h3 className="font-bold text-sm text-slate-800 line-clamp-2">{trip.title || 'Open Trip'}</h3>
                            <div className="flex flex-col gap-1 mt-1">
                                <div className="flex items-center text-xs text-slate-500">
                                    <Calendar size={12} className="mr-1 flex-shrink-0" />
                                    <span className="truncate">{trip.date || 'Tiap Weekend'}</span>
                                </div>
                                <div className="flex items-center text-xs text-slate-500">
                                    <Users size={12} className="mr-1 flex-shrink-0" />
                                    <span className="truncate">{trip.quota || 'Sisa 5 Slot'}</span>
                                </div>
                            </div>
                            <div className="font-bold text-blue-600 text-sm mt-1">
                                Rp {trip.price ? trip.price.toLocaleString('id-ID') : '1.500.000'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
