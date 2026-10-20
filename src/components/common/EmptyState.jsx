import React from 'react';

export default function EmptyState({ title = 'Tidak Ada Data', description = 'Maaf, data tidak ditemukan.', onRetry }) {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-24 h-24 mb-4 opacity-50 bg-slate-300 rounded-full flex items-center justify-center text-4xl">
                <span>🏜️</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">{title}</h2>
            <p className="text-slate-500 mb-6">{description}</p>
            {onRetry && (
                <button onClick={onRetry} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-md">
                    Coba Lagi
                </button>
            )}
        </div>
    );
}
