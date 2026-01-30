'use client';

import { useState } from 'react';
import { courses } from '@/lib/training-data';
import { CourseCard } from '@/components/training/CourseCard';
import { DashboardHeader } from '@/components/training/DashboardHeader';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrainingDashboard() {
    const [activeFilter, setActiveFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

    const enrolledCourses = courses.filter(c => c.enrolled);
    const allCourses = courses;

    const filteredCourses = activeFilter === 'All'
        ? allCourses
        : allCourses.filter(c => c.level === activeFilter);

    return (
        <>
            <section className="section-padding pt-24 min-h-screen">
                <div className="container-custom">
                    {/* Dashboard Header */}
                    <DashboardHeader />

                    {/* My Learning Section */}
                    {enrolledCourses.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                My Learning
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                    {enrolledCourses.length}
                                </span>
                            </h2>
                            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                                {enrolledCourses.map(course => (
                                    <div key={course.id} className="min-w-[300px] md:min-w-[350px]">
                                        <CourseCard course={course} compact />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Browse All Courses */}
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                            <div>
                                <h2 className="text-2xl font-bold">Browse Catalog</h2>
                                <p className="text-muted-foreground">Expand your skills with our professional tracks.</p>
                            </div>

                            {/* Filter Tabs */}
                            <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-secondary/50 border border-border">
                                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === filter
                                                ? 'bg-background shadow-sm text-foreground'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        {filteredCourses.length === 0 && (
                            <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
                                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">No courses found</h3>
                                <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results.</p>
                                <Button onClick={() => setActiveFilter('All')} variant="outline">
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
