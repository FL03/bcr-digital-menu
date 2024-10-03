/*
    Appellation: card <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Sheet, SheetContent, SheetTrigger, } from "@/src/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

import type Profile from './model.d';

export default function ProfileCard({ user }: { user?: Profile }) {

    // initialize profile drawer state
    const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);

    const navlinks = [
        { name: 'Profile', href: '/profile' },
        { name: 'Settings', href: '/settings' },
        { name: 'Notifications', href: '/notifications' },
    ];

    return (
        <>
            <Sheet open={isProfileSidebarOpen} onOpenChange={setIsProfileSidebarOpen}>
                <SheetTrigger asChild>
                    <Card className="bg-white dark:bg-zinc-800 dark:text-white z-10 flex flex-shrink max-w-xs mr-16 cursor-pointer hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={user?.avatar} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-semibold">{user?.name}</h2>
                                <p className="text-sm text-muted-foreground">{user?.username}</p>
                            </div>
                        </CardContent>
                    </Card>
                </SheetTrigger>
                {/* User Drawer */}
                <SheetContent className="w-64 flex flex-col" side="left">
                    <Card className="mt-4 mb-2">
                        <CardContent className="p-4 flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={user?.avatar} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-semibold">{user?.name}</h2>
                                <p className="text-sm text-muted-foreground">{user?.username}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <nav className="flex flex-col flex-grow space-y-4">
                        {navlinks.map((link) => (
                            <Button asChild key={link.name} variant="ghost">
                                <Link href={link.href}>{link.name}</Link>
                            </Button>
                        ))}
                    </nav>
                    <nav className="flex flex-col justify-start space-y-4">
                        <Button size="lg" variant="secondary">Alias</Button>
                        <Button size="lg" variant="destructive">Logout</Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    )
}