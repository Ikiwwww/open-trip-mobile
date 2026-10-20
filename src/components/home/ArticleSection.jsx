import React from 'react';

export default function ArticleSection({ articles = [] }) {
    if (!articles || !articles.length) return null;
    return (
        <div className="px-4 py-4 mb-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-800">Artikel Travel</h2>
                <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
            </div>
            <div className="flex flex-col gap-4">
                {articles.map((article, idx) => (
                    <div key={idx} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm">
                        <img src={article.image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt={article.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                        <div className="flex flex-col justify-center">
                            <h3 className="font-bold text-sm text-slate-800 line-clamp-2">{article.title || 'Tips Liburan Murah dan Nyaman'}</h3>
                            <span className="text-xs text-slate-500 mt-2">{article.date || '12 Okt 2026'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
