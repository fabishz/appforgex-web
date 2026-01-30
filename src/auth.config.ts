
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnTraining = nextUrl.pathname.startsWith('/training');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');
            const isOnLogin = nextUrl.pathname.startsWith('/login');
            const isOnRegister = nextUrl.pathname.startsWith('/register');

            if (isOnAdmin) {
                if (isLoggedIn && auth?.user?.role === 'admin') return true;
                return Response.redirect(new URL('/training', nextUrl)); // Redirect non-admins to training
            }

            if (isOnTraining) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn && (isOnLogin || isOnRegister)) {
                return Response.redirect(new URL('/training', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
