import React from 'react';
import { Home, Compass, Heart, User } from 'lucide-react';

export default function BottomNavbar() {
    return (
        <div className="fixed bottom-0 w-full bg-white border-t border-slate-200 flex justify-around items-center py-3 px-4 z-50">
            <button className="flex flex-col items-center text-blue-600">
                <Home size={24} />
                <span className="text-[10px] font-medium mt-1">Beranda</span>
            </button>
            <button className="flex flex-col items-center text-slate-400">
                <Compass size={24} />
                <span className="text-[10px] mt-1">Eksplor</span>
            </button>
            <button className="flex flex-col items-center text-slate-400">
                <Heart size={24} />
                <span className="text-[10px] mt-1">Favorit</span>
            </button>
            <button className="flex flex-col items-center text-slate-400">
                <User size={24} />
                <span className="text-[10px] mt-1">Profil</span>
            </button>
        </div>
    );
}
