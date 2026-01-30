
import { GraduationCap, BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TrainingPage() {
    const courses = [
        {
            title: 'Full Stack Development',
            duration: '12 Weeks',
            level: 'Beginner to Advanced',
            topics: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
            description: 'Master the art of building modern web applications from scratch.',
        },
        {
            title: 'Mobile App Mastery',
            duration: '10 Weeks',
            level: 'Intermediate',
            topics: ['React Native', 'iOS', 'Android', 'Deployment'],
            description: 'Learn to build cross-platform mobile apps that perform like native.',
        },
        {
            title: 'DevOps & Cloud Engineering',
            duration: '8 Weeks',
            level: 'Advanced',
            topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
            description: 'Become a master of infrastructure automation and cloud scalability.',
        },
        {
            title: 'AI & Machine Learning',
            duration: '14 Weeks',
            level: 'Intermediate',
            topics: ['Python', 'TensorFlow', 'LLMs', 'Data Science'],
            description: 'Dive into the future with practical AI and ML implementation skills.',
        },
    ];

    return (
        <>
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            AppforgeX Academy
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            Upgrade Your <span className="gradient-text">Skills</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2 mb-8">
                            Industry-standard training programs designed to launch and accelerate your tech career.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                                        {course.level}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{course.description}</p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {course.topics.map((topic) => (
                                            <span key={topic} className="px-2 py-1 rounded bg-secondary/50 text-xs border border-border">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/contact" className="mt-auto">
                                    <Button className="w-full group-hover:translate-x-1 transition-transform">
                                        Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-secondary/20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Train With Us?</h2>
                            <ul className="space-y-4">
                                {[
                                    'Expert Instructors from Top Tech Companies',
                                    'Hands-on Project Based Learning',
                                    'Career Support and Mentorship',
                                    'Lifetime Access to Course Materials',
                                    'Certification upon Completion',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="mt-8 glow-effect">
                                Get Syllabus
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-3xl opacity-20" />
                            <div className="relative p-8 rounded-3xl bg-card border border-border">
                                <GraduationCap className="w-24 h-24 text-primary mx-auto mb-6" />
                                <div className="text-center">
                                    <div className="text-5xl font-bold mb-2">1000+</div>
                                    <div className="text-xl text-muted-foreground">Graduates Placed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
