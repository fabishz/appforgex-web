
import { Check, Zap, Shield, Smile, Trophy, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WhyUsPage() {
    const reasons = [
        {
            icon: Zap,
            title: 'Lightning Fast Delivery',
            description: 'We use modern agile methodologies to deliver projects 30% faster than the industry average without compromising quality.',
        },
        {
            icon: Shield,
            title: 'Enterprise-Grade Security',
            description: 'Security is baked into our process from day one. We ensure your data and applications are protected against modern threats.',
        },
        {
            icon: Smile,
            title: 'User-Centric Design',
            description: 'We don\'t just build code; we build experiences. Our design team focuses on creating intuitive interfaces users love.',
        },
        {
            icon: Trophy,
            title: 'Award Winning Team',
            description: 'Work with a team that has been recognized for technical excellence and innovative solutions in the digital space.',
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Our relationship doesn\'t end at launch. We provide round-the-clock support to ensure your business never stops.',
        },
        {
            icon: Check,
            title: 'Transparent Pricing',
            description: 'No hidden fees or surprise costs. We provide detailed estimates and transparent billing throughout the project.',
        },
    ];

    return (
        <>
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            Why Choose AppforgeX
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            The <span className="gradient-text">Difference</span> is in the Details
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2 mb-8">
                            We combine technical expertise with business acumen to deliver solutions that drive real results.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <reason.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                                <p className="text-muted-foreground">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-background border-t border-border">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold">Guaranteed Results</h2>
                            <p className="text-lg text-muted-foreground">
                                We are so confident in our ability to deliver that we offer performance guarantees on all our major projects. If we don't meet the agreed-upon KPIs, we work for free until we do.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 border border-border rounded-xl">
                                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                                </div>
                                <div className="p-4 border border-border rounded-xl">
                                    <div className="text-3xl font-bold text-primary mb-1">0</div>
                                    <div className="text-sm text-muted-foreground">Critical Bugs</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-border bg-secondary/20 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                            <div className="text-center p-8 relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                                <Link href="/contact">
                                    <Button size="lg" className="glow-effect">
                                        Get Your Proposal
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
