
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Course } from '@/lib/training-data';

interface CourseCardProps {
    course: Course;
    compact?: boolean;
}

export function CourseCard({ course, compact = false }: CourseCardProps) {
    const Icon = course.icon;

    return (
        <div className={`group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col ${compact ? 'min-w-[300px]' : 'h-full'}`}>
            {/* Header / Image Area */}
            <div className={`relative p-6 ${course.image} border-b border-border/50`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm">
                        <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${course.level === 'Beginner' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                            course.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                'bg-purple-500/10 text-purple-500 border-purple-500/20'
                        }`}>
                        {course.level}
                    </span>
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>

                {!compact && (
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {course.description}
                    </p>
                )}

                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                    </div>
                    {course.enrolled && (
                        <div className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{course.modules?.length || 0} Modules</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer / Action Area */}
            <div className="p-6 mt-auto">
                {course.enrolled ? (
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-primary">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                        </div>
                        <Link href={`/training/${course.id}`} className="block">
                            <Button className="w-full" variant="outline">
                                Continue Learning <PlayCircle className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {!compact && (
                            <div className="flex flex-wrap gap-2">
                                {course.topics.slice(0, 3).map(t => (
                                    <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                        <Link href={`/training/${course.id}`} className="block">
                            <Button className="w-full w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                Start Course <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
