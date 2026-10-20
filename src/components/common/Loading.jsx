import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
