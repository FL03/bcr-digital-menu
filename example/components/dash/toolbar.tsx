/*
    Appellation: toolbar <module>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Search, Command } from "lucide-react"

export default function Toolbar() {
    const commands = {
        base: [
            { name: "Profile", shortcut: "⇧⌘P" },
            { name: "Billing", shortcut: "⌘B" },
            { name: "Settings", shortcut: "⌘S" },
            { name: "Keyboard shortcuts", shortcut: "⌘K" },
        ]
    };
    return (
        <>
            <div className="bg-black bg-opacity-5 fixed bottom-0 z-1 pr-16 w-screen">
                <div className="flex flex-nowrap justify-center items-center">
                    <div className="p-4 w-full max-w-lg sm:max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            <Input
                                className="px-10 py-2 w-full rounded-full shadow-inner "
                                placeholder="Search..."
                                type="search"
                            />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="absolute right-1 top-1/2 transform -translate-y-1/2" size="sm" variant="ghost">
                                        <Command className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        {commands.base.map((command, index) => (
                                            <DropdownMenuItem key={index}>
                                                {command.name}
                                                <DropdownMenuShortcut>{command.shortcut}</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>More...</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            New Team
                                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuItem disabled>API</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Log out
                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}