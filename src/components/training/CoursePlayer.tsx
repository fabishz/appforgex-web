'use client';

import { useState } from 'react';
import { Course, Lesson } from '@/lib/training-data';
import { PlayCircle, FileText, CheckCircle, Lock, Menu, X, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CoursePlayerProps {
    course: Course;
}

export function CoursePlayer({ course }: CoursePlayerProps) {
    // Find first uncompleted lesson or default to first lesson
    const firstLesson = course.modules[0]?.lessons[0];
    const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(firstLesson);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (!course.modules || course.modules.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
                <Lock className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
                <h2 className="text-2xl font-bold mb-2">Content Locked</h2>
                <p className="text-muted-foreground mb-6">This course content is not currently available.</p>
                <Button>Request Access</Button>
            </div>
        );
    }

    const handleLessonSelect = (lesson: Lesson) => {
        setCurrentLesson(lesson);
        setMobileMenuOpen(false);
    };

    // Find navigation indices
    let alllessons: Lesson[] = [];
    course.modules.forEach(m => alllessons.push(...m.lessons));
    const currentIndex = alllessons.findIndex(l => l.id === currentLesson?.id);
    const prevLesson = currentIndex > 0 ? alllessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < alllessons.length - 1 ? alllessons[currentIndex + 1] : null;

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-140px)]">

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden mb-4">
                <Button variant="outline" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-full justify-between">
                    {currentLesson?.title || 'Select Lesson'}
                    <Menu className="w-4 h-4 ml-2" />
                </Button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto pr-2">
                {currentLesson ? (
                    <div className="space-y-6 animate-fade-in">
                        {/* Video Player / Content Placeholder */}
                        <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-lg border border-border">
                            {currentLesson.type === 'video' && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    {/* Placeholder Image */}
                                    <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                                        <PlayCircle className="w-20 h-20 text-white opacity-80" />
                                    </div>
                                    <div className="absolute bottom-6 left-6 z-20 text-white">
                                        <p className="text-sm font-medium mb-1 uppercase tracking-wider opacity-80">Video Lesson</p>
                                        <h3 className="text-2xl font-bold">{currentLesson.title}</h3>
                                    </div>
                                </>
                            )}
                            {currentLesson.type === 'article' && (
                                <div className="bg-card w-full h-full p-8 md:p-16 overflow-y-auto">
                                    <FileText className="w-12 h-12 text-primary mb-4" />
                                    <h2 className="text-3xl font-bold mb-6">{currentLesson.title}</h2>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Key Takeaways</h3>
                                        <ul>
                                            <li>Understand the core concepts of {course.title}</li>
                                            <li>Apply best practices in real-world scenarios</li>
                                            <li>Master usage of tools and libraries</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {currentLesson.type === 'quiz' && (
                                <div className="bg-primary/5 w-full h-full flex flex-col items-center justify-center p-8 text-center">
                                    <HelpCircle className="w-16 h-16 text-primary mb-4" />
                                    <h2 className="text-3xl font-bold mb-2">Knowledge Check</h2>
                                    <p className="text-muted-foreground mb-6">Test your understanding of the previous modules.</p>
                                    <Button size="lg" className="glow-effect">Start Quiz</Button>
                                </div>
                            )}
                        </div>

                        {/* Lesson Details & Navigation */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
                            <div>
                                <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
                                <p className="text-muted-foreground">{course.title} &bull; {currentLesson.duration}</p>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                                <Button
                                    variant="outline"
                                    disabled={!prevLesson}
                                    onClick={() => prevLesson && handleLessonSelect(prevLesson)}
                                    className="flex-1 md:flex-none"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                                </Button>
                                <Button
                                    disabled={!nextLesson}
                                    onClick={() => nextLesson && handleLessonSelect(nextLesson)}
                                    className="flex-1 md:flex-none"
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>

                        {/* Description / Resources */}
                        <div className="prose dark:prose-invert max-w-none">
                            <h3>Lesson Overview</h3>
                            <p>
                                Welcome to <strong>{currentLesson.title}</strong>. In this session, we will explore key concepts essential for your journey in {course.title}.
                                Make sure to review the attached resources and complete any exercises provided.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p>Select a lesson to start learning</p>
                    </div>
                )}
            </div>

            {/* Sidebar - Desktop & Mobile Overlay */}
            <div className={`
         fixed inset-0 z-50 bg-background lg:static lg:bg-transparent lg:z-auto lg:w-80 lg:flex-shrink-0
         transform transition-transform duration-300 ease-in-out
         ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
                <div className="h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-border flex justify-between items-center bg-muted/30">
                        <h3 className="font-bold">Course Content</h3>
                        <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(false)}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    <ScrollArea className="flex-1 p-4">
                        <div className="space-y-6">
                            {course.modules.map((module, mIndex) => (
                                <div key={module.id} className="space-y-2">
                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-2">
                                        Module {mIndex + 1}: {module.title}
                                    </h4>
                                    <div className="space-y-1">
                                        {module.lessons.map((lesson) => (
                                            <button
                                                key={lesson.id}
                                                onClick={() => handleLessonSelect(lesson)}
                                                className={`
                                   w-full text-left p-3 rounded-lg flex items-start gap-3 transition-colors text-sm
                                   ${currentLesson?.id === lesson.id
                                                        ? 'bg-primary text-primary-foreground shadow-md'
                                                        : 'hover:bg-secondary text-muted-foreground hover:text-foreground'}
                                `}
                                            >
                                                <div className={`mt-0.5 ${currentLesson?.id === lesson.id ? 'text-primary-foreground' : 'text-primary'}`}>
                                                    {lesson.completed ? (
                                                        <CheckCircle className="w-4 h-4" />
                                                    ) : (
                                                        <div className={`w-4 h-4 rounded-full border-2 ${currentLesson?.id === lesson.id ? 'border-primary-foreground' : 'border-muted'}`} />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium line-clamp-1">{lesson.title}</div>
                                                    <div className={`text-xs mt-1 flex items-center gap-1 ${currentLesson?.id === lesson.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                                        {lesson.type === 'video' ? <PlayCircle className="w-3 h-3" /> : lesson.type === 'quiz' ? <HelpCircle className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                                                        {lesson.duration}
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
