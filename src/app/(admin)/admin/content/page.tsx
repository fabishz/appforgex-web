
import { courses } from '@/lib/training-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, BookOpen, Clock } from 'lucide-react';

export default function ContentPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Content Management</h1>
                    <p className="text-muted-foreground">
                        Manage courses, modules, and learning materials
                    </p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Course
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Courses ({courses.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>
                                    <Badge variant="outline">{course.level}</Badge>
                                </div>

                                <h3 className="font-semibold mb-2">{course.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {course.duration}
                                    </div>
                                    <div>
                                        {course.modules?.length || 0} modules
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
