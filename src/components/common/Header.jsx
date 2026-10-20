import React from 'react';
import { Bell, MapPin } from 'lucide-react';

export default function Header() {
    return (
        <div className="bg-blue-600 text-white px-4 pt-8 pb-10 rounded-b-[2rem] flex justify-between items-start">
            <div>
                <h1 className="text-sm opacity-90">Lokasi Anda</h1>
                <div className="flex items-center gap-1 font-bold">
                    <MapPin size={16} />
                    <span>Jakarta, Indonesia</span>
                </div>
            </div>
            <button className="p-2 bg-white/20 rounded-full">
                <Bell size={20} />
            </button>
        </div>
    );
}
