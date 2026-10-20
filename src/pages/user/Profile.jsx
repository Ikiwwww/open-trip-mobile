import React from 'react';
import BottomNavbar from '../../components/common/BottomNavbar';

const Profile = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <p>Profile content goes here.</p>
            </div>
            <BottomNavbar />
        </div>
    );
};

export default Profile;
