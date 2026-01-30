
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortfolioPage() {
    const projects = [
        {
            title: 'FinTech Dashboard',
            category: 'Web App',
            description: 'A comprehensive financial analytics dashboard for a leading investment firm, processing real-time market data.',
            tech: ['React', 'Next.js', 'PostgreSQL', 'D3.js'],
            image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
        },
        {
            title: 'HealthTrack Pro',
            category: 'Mobile App',
            description: 'Cross-platform mobile application for patient monitoring and telehealth consultations.',
            tech: ['React Native', 'Firebase', 'WebRTC'],
            image: 'bg-gradient-to-br from-green-500/20 to-teal-500/20'
        },
        {
            title: 'E-Commerce Giant',
            category: 'Web Platform',
            description: 'Scalable e-commerce solution handling over 100k daily transactions with sub-second latency.',
            tech: ['Next.js', 'Node.js', 'Redis', 'Stripe'],
            image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
        },
        {
            title: 'AI Content Gen',
            category: 'AI Solution',
            description: 'Generative AI tool helping marketing teams create SEO-optimized content in seconds.',
            tech: ['Python', 'OpenAI API', 'FastAPI', 'React'],
            image: 'bg-gradient-to-br from-pink-500/20 to-rose-500/20'
        },
        {
            title: 'Supply Chain Viz',
            category: 'Enterprise Tool',
            description: '3D visualization tool for global logistics and supply chain optimization.',
            tech: ['Three.js', 'WebGL', 'Vue.js', 'GraphQL'],
            image: 'bg-gradient-to-br from-indigo-500/20 to-cyan-500/20'
        },
        {
            title: 'EdTech Platform',
            category: 'Web Platform',
            description: 'Learning management system serving 50+ schools with interactive video lessons.',
            tech: ['Next.js', 'AWS', 'Video.js', 'PostgreSQL'],
            image: 'bg-gradient-to-br from-yellow-500/20 to-amber-500/20'
        }
    ];

    return (
        <>
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            Our Work
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            Delivering <span className="gradient-text">Excellence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2 mb-8">
                            Explore a selection of our recent projects where we turned complex challenges into elegant solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                                    <span className="text-muted-foreground/50 font-mono text-sm">[Project Screenshot Placeholder]</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">{project.category}</span>
                                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded border border-border">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
                        <Link href="/contact">
                            <Button size="lg" className="glow-effect">
                                Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
