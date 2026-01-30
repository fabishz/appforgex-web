
import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'AppforgeX - Enterprise Technology Solutions',
    description: 'Enterprise Technology Solutions & Training',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen font-sans antialiased bg-background text-foreground">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
