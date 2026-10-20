import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBox() {
    return (
        <div className="px-4 -mt-6 relative z-10">
            <div className="bg-white rounded-xl shadow-md flex items-center px-4 py-3">
                <Search size={20} className="text-slate-400 mr-2" />
                <input 
                    type="text" 
                    placeholder="Mau liburan kemana?" 
                    className="w-full bg-transparent focus:outline-none text-slate-700 text-sm"
                />
            </div>
        </div>
    );
}
