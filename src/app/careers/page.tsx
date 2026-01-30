
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CareersPage() {
    const positions = [
        {
            title: 'Senior Full Stack Engineer',
            department: 'Engineering',
            location: 'Remote / San Francisco',
            type: 'Full-time',
            description: 'We are looking for an experienced developer to lead complex web application projects using Next.js and Node.js.'
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create intuitive and beautiful user interfaces that solve real user problems.'
        },
        {
            title: 'Technical Project Manager',
            department: 'Product',
            location: 'Hybrid',
            type: 'Contract',
            description: 'Manage timelines, stakeholders, and delivery of enterprise software projects.'
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'Automate our infrastructure and optimize our CI/CD pipelines.'
        },
    ];

    return (
        <>
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            Careers at AppforgeX
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            Join the <span className="gradient-text">Innovation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2 mb-8">
                            We are always on the lookout for talented individuals who are passionate about technology and creating impact.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-12 flex justify-between items-end">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Open Positions</h2>
                                <p className="text-muted-foreground">Come help us build the future.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {positions.map((job, index) => (
                                <div key={index} className="p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors">
                                    <div className="space-y-4 md:space-y-2 flex-grow">
                                        <h3 className="text-2xl font-bold">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Briefcase className="w-4 h-4" /> {job.department}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" /> {job.type}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground md:max-w-2xl">{job.description}</p>
                                    </div>
                                    <Link href="/contact" className="flex-shrink-0">
                                        <Button size="lg" variant="secondary" className="w-full md:w-auto">
                                            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
                            <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                We are always growing and looking for exceptional talent. Send us your resume and tell us why you'd be a great addition to the team.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="glow-effect">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
