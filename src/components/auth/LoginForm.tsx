
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <form action={dispatch} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                    minLength={6}
                />
            </div>
            <diV>
                {errorMessage && (
                    <div className="flex items-center space-x-2 text-red-500 text-sm mb-4 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <AlertCircle className="h-4 w-4" />
                        <p>{errorMessage}</p>
                    </div>
                )}
                <LoginButton />
            </diV>
            <div className="text-center text-sm text-muted-foreground mt-4">
                Don't have an account?{' '}
                <Link href="/register" className="text-primary hover:underline font-medium">
                    Sign Up
                </Link>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full glow-effect" aria-disabled={pending}>
            Log in {pending ? '...' : <ArrowRight className="ml-2 w-4 h-4" />}
        </Button>
    );
}
