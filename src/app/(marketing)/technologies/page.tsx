
import {
    Code2,
    Database,
    Cloud,
    Smartphone,
    Layout,
    Globe,
    Server,
    Terminal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TechnologiesPage() {
    const categories = [
        {
            title: 'Frontend',
            icon: Layout,
            techs: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
            description: 'Building responsive, accessible, and performant user interfaces.'
        },
        {
            title: 'Backend',
            icon: Server,
            techs: ['Node.js', 'Express', 'Python', 'FastAPI', 'Go', 'Java'],
            description: 'Robust server-side logic and API development.'
        },
        {
            title: 'Database',
            icon: Database,
            techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Neon', 'Prisma'],
            description: 'Secure and scalable data storage solutions.'
        },
        {
            title: 'Mobile',
            icon: Smartphone,
            techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
            description: 'Native experience on both iOS and Android platforms.'
        },
        {
            title: 'Cloud & DevOps',
            icon: Cloud,
            techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
            description: 'Infrastructure as Code and automated deployment pipelines.'
        },
        {
            title: 'AI & Data',
            icon: Code2,
            techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Pandas'],
            description: 'Integrating intelligence into applications.'
        }
    ];

    return (
        <>
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            Technology Stack
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            Powered by <span className="gradient-text">Modern Tech</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2 mb-8">
                            We choose the right tools for the job, favoring technologies that offer stability, scalability, and performance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">{cat.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-6 text-sm">{cat.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cat.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-secondary/20">
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Don't see your tech stack?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our team consists of polyglot engineers who adapt quickly to new technologies. We integrate with your existing systems seamlessly.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                Discuss Your Requirements
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
