
import { getCourse } from '@/lib/training-data';
import { ArrowLeft, PlayCircle, FileText, CheckCircle, Lock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
    const course = getCourse(params.courseId);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-20">
            <div className="border-b border-border bg-card">
                <div className="container-custom py-8">
                    <Link href="/training" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-primary-foreground ${course.image.replace('/10', '')} bg-primary`}>
                            <course.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl text-muted-foreground max-w-3xl">{course.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img src="/api/placeholder/800/450" alt="Course Preview" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                                <PlayCircle className="w-10 h-10 text-white fill-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <p className="text-sm font-medium mb-1 uppercase tracking-wider opacity-80">Now Playing</p>
                                <h3 className="text-2xl font-bold">Introduction to the Course</h3>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3>About this course</h3>
                            <p>
                                In this comprehensive course, we will dive deep into {course.title}.
                                You will learn through practical examples and hands-on projects designed to solidify your understanding.
                            </p>
                            <h3>What you'll learn</h3>
                            <ul>
                                {course.topics.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Syllabus */}
                    <div className="space-y-6">
                        <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                            <h3 className="text-lg font-bold mb-4">Course Content</h3>
                            <div className="space-y-4">
                                {course.modules && course.modules.length > 0 ? (
                                    course.modules.map((module, mIndex) => (
                                        <div key={module.id} className="space-y-3">
                                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Module {mIndex + 1}: {module.title}</h4>
                                            <div className="space-y-2">
                                                {module.lessons.map((lesson, lIndex) => (
                                                    <button
                                                        key={lesson.id}
                                                        className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${lesson.completed
                                                                ? 'bg-primary/5 text-foreground hover:bg-primary/10'
                                                                : 'hover:bg-secondary'
                                                            }`}
                                                    >
                                                        {lesson.completed ? (
                                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                        ) : (
                                                            <div className="w-5 h-5 rounded-full border-2 border-muted flex-shrink-0" />
                                                        )}
                                                        <div className="flex-grow min-w-0">
                                                            <p className="text-sm font-medium truncate">{lesson.title}</p>
                                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                                {lesson.type === 'video' ? <PlayCircle className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                                                                {lesson.duration}
                                                            </span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <Lock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                        <p>Content locked until enrollment</p>
                                        <Button className="mt-4 w-full">Enroll Now</Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
