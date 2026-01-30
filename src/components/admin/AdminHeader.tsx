
'use client';

import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AdminHeader = () => {
    return (
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4 lg:pl-0 pl-12">
                {/* Placeholder for breadcrumbs or title */}
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                </Button>
            </div>
        </header>
    );
};
