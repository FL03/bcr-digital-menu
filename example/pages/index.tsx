"use client";

import { Appbar, Navbar, Profile, ProfileCard, Toolbar } from '@/src/components/dash';
import { metadata } from '@/src/pages/_app';

const dummyUser: Profile = {
    uid: '1',
    avatar: 'https://github.com/FL03',
    email: 'john.doe@gmail.com',
    name: 'John Doe',
    phone: '+1234567890',
    username: 'john.doe',
};

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-full bg-background text-foreground">
            <div className="flex flex-col min-h-full">
                <Navbar title={metadata.title?.toString()}/>
                {/* Display */}
                <div className="p-4 flex-grow relative">
                    <ProfileCard user={dummyUser}/>
                </div>
                {/* Input Bar */}
                <Toolbar />
            </div>
            {/* Taskbar */}
            <Appbar />
        </div>
    )
}
