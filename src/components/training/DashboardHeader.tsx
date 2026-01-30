
import { Sparkles } from 'lucide-react';

export function DashboardHeader() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-12 mb-12">
            {/* Decorative */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-2 text-primary font-medium mb-4 animate-fade-in-up">
                    <Sparkles className="w-5 h-5" />
                    <span>Welcome back, Learner!</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in-up stagger-1">
                    Ready to <span className="gradient-text">Level Up?</span>
                </h1>
                <p className="text-lg text-muted-foreground animate-fade-in-up stagger-2">
                    Pick up where you left off or discover a new skill path today.
                    Your future self will thank you.
                </p>
            </div>
        </div>
    );
}
