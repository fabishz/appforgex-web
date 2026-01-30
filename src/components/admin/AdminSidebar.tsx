
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Settings,
    LogOut,
    Menu,
    X,
    ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const adminLinks = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Learners', path: '/admin/learners', icon: Users },
    { name: 'Content', path: '/admin/content', icon: BookOpen },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export const AdminSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar when clicking outside on mobile
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-border rounded-lg shadow-sm"
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Sidebar Container */}
            <aside
                className={`
          fixed top-0 left-0 z-40 h-screen bg-card border-r border-border transition-transform duration-300 ease-in-out
          w-64 lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="flex flex-col h-full p-4">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2 px-2 mb-8 mt-2">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                        <div>
                            <h1 className="font-bold text-lg leading-none">Admin</h1>
                            <span className="text-xs text-muted-foreground">Control Panel</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1">
                        {adminLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}
                  `}
                                >
                                    <Icon className="w-5 h-5" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile / Logout */}
                    <div className="mt-auto pt-4 border-t border-border">
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={() => signOut({ callbackUrl: '/' })}
                        >
                            <LogOut className="w-5 h-5 mr-2" />
                            Log Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};
