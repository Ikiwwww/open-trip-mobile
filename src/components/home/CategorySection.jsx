import React from 'react';

export default function CategorySection({ categories = [] }) {
    if (!categories || !categories.length) return null;
    return (
        <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-800">Kategori</h2>
                <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center min-w-[70px]">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-2 overflow-hidden">
                            {cat.icon ? <img src={cat.icon} alt={cat.name} className="w-8 h-8" /> : <div className="w-6 h-6 bg-blue-100 rounded-full"></div>}
                        </div>
                        <span className="text-xs text-slate-600 text-center">{cat.name || 'Category'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
