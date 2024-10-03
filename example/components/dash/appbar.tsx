/*
    Appellation: appbar <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, } from "@/src/components/ui/sheet";
import { Calendar, FileText, Home, LayoutDashboard, Mail, Menu, Settings, } from 'lucide-react';
import { useState } from "react"

export default function Appbar() {
    // initialize system drawer state
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const taskbarApps = [
        { icon: <Home className="h-6 w-6" />, name: "Home" },
        { icon: <Calendar className="h-6 w-6" />, name: "Calendar" },
        { icon: <FileText className="h-6 w-6" />, name: "Content" },
        { icon: <LayoutDashboard className="h-6 w-6" />, name: "Dashboard" },
        { icon: <Mail className="h-6 w-6" />, name: "Messages", onClick: () => console.log("Messages") },
    ]
    return (
        <>
            <div className="fixed right-0 top-0 bottom-0 bg-secondary p-2 flex flex-col justify-start shadow-lg">
                <div>
                    <Button className="mb-2 last:mb-0" onClick={() => setIsDrawerOpen(true)} size="icon" variant="ghost">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Menu</span>
                    </Button>
                </div>
                <div className="flex flex-col flex-grow justify-end">
                    {taskbarApps.map((app, index) => (
                        <Button key={index} className="mb-2 last:mb-0" onClick={app.onClick} size="icon" variant="link">
                            {app.icon}
                            <span className="sr-only">{app.name}</span>
                        </Button>
                    ))}
                    <br/>
                    <Button className="mb-2 last:mb-0" onClick={() => {}} size="icon" variant="link">
                        <Settings className="h-6 w-6" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </div>
            </div>
            <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <SheetContent className="w-64 flex flex-col justify-evenly" side="right" >
                    <div className="flex items-center justify-end">
                        <h2 className="font-bold mt-4">Platform</h2>
                    </div>
                    <nav className="flex flex-col flex-grow space-y-4">
                        <Button variant="link">Notifications</Button>
                        <Button variant="link">Security</Button>
                        <Button variant="link">Settings</Button>
                        <Button variant="link">Updates</Button>
                    </nav>
                    <div className="flex flex-col mt-4 space-y-4">
                        <Button variant="link">Device</Button>
                        <Button variant="link">Help & Support</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}