
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Brain, Shield, Database, Palette, Cog, Boxes, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { query } from '@/lib/db';
import { services as placeholderServices } from '@/lib/placeholder-data';

// Map icon names to components
const IconMap: Record<string, any> = {
    Code,
    Smartphone,
    Brain,
    Shield,
    Database,
    Palette,
    Cog,
    Boxes,
    Bot
};

async function getServices() {
    try {
        const result = await query('SELECT * FROM services');
        if (result.rows && result.rows.length > 0) {
            return result.rows;
        }
        return placeholderServices;
    } catch (error) {
        console.error("Failed to fetch services:", error);
        return placeholderServices;
    }
}

export default async function Services() {
    // Fetch data on the server
    const services = await getServices();

    return (
        <>
            {/* Hero Section */}
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            End-to-End <span className="gradient-text">Technology Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2">
                            From concept to deployment, we provide comprehensive services that
                            transform your ideas into powerful digital products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-16">
                        {services.map((service: any, index: number) => {
                            const IconComponent = IconMap[service.iconName || 'Code'] || Code;

                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`scroll-mt-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                                        <div className={`animate-fade-in-up opacity-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center glow-effect">
                                                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                                            </div>
                                            <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                                            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                                                {service.details.map((detail: string) => (
                                                    <li key={detail} className="flex items-center gap-2 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link href="/contact">
                                                <Button className="glow-effect hover:glow-effect-strong">
                                                    Get Started
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className={`animate-fade-in-up opacity-0 stagger-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                            <div className="p-8 rounded-2xl bg-card border border-border">
                                                <h4 className="text-sm font-medium text-muted-foreground mb-4">Technologies we use</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.technologies.map((tech: string) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {index < services.length - 1 && (
                                        <div className="border-b border-border mt-16" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-card">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            Ready to Build Something <span className="gradient-text">Amazing</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Let's discuss your project requirements and create a solution that
                            exceeds your expectations.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="glow-effect hover:glow-effect-strong">
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
