
import { getCourse } from '@/lib/training-data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CoursePlayer } from '@/components/training/CoursePlayer';

export default async function CourseDetailPage(props: { params: Promise<{ courseId: string }> }) {
    const params = await props.params;
    const course = getCourse(params.courseId);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-20">
            <div className="border-b border-border bg-card">
                <div className="container-custom py-4">
                    <Link href="/training" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                    </Link>
                </div>
            </div>

            <div className="container-custom py-8">
                <CoursePlayer course={course} />
            </div>
        </div>
    );
}
