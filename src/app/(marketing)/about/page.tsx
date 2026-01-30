
import { Users, Target, Award, Rocket, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
    const stats = [
        { label: 'Years Experience', value: '10+' },
        { label: 'Projects Delivered', value: '200+' },
        { label: 'Team Members', value: '50+' },
        { label: 'Client Satisfaction', value: '98%' },
    ];

    const values = [
        {
            icon: Target,
            title: 'Innovation First',
            description: 'We constantly push boundaries to deliver cutting-edge solutions that keep you ahead of the curve.',
        },
        {
            icon: Users,
            title: 'Client-Centric',
            description: 'Your success is our success. We work collaboratively to ensure your vision comes to life perfectly.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We maintain the highest standards in code quality, design, and performance optimization.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            About AppforgeX
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            Building the <span className="gradient-text">Future</span> of Digital
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2 mb-8">
                            We are a team of passionate developers, designers, and strategists dedicated to transforming ideas into impactful digital realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-card border-y border-border">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground text-lg">
                                <p>
                                    Founded with a vision to bridge the gap between complex technology and business needs, AppforgeX has grown from a small studio into a comprehensive digital powerhouse.
                                </p>
                                <p>
                                    We believe that technology should be an enabler, not a barrier. That's why we focus on creating intuitive, scalable, and robust solutions that drive real business growth.
                                </p>
                                <p>
                                    Today, we serve clients globally, ranging from ambitious startups to established enterprises, helping them navigate the digital landscape with confidence.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 transform translate-y-8">
                                <div className="aspect-square rounded-2xl bg-secondary/30 flex items-center justify-center p-8 border border-border">
                                    <Rocket className="w-16 h-16 text-primary" />
                                </div>
                                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center p-8 border border-primary/20">
                                    <Globe className="w-16 h-16 text-primary" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square rounded-2xl bg-primary/5 flex items-center justify-center p-8 border border-primary/10">
                                    <Heart className="w-16 h-16 text-primary" />
                                </div>
                                <div className="aspect-square rounded-2xl bg-secondary/50 flex items-center justify-center p-8 border border-border">
                                    <Users className="w-16 h-16 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-secondary/20">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground text-lg">
                            These principles guide every project we undertake and every decision we make.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-primary/5 border border-primary/10">
                        <h2 className="text-3xl font-bold mb-6">Want to work with us?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            We're always looking for interesting projects and partners.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="glow-effect">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
