
import { query } from '@/lib/db';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Calendar } from 'lucide-react';

async function getLearners() {
    try {
        const result = await query(
            'SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC'
        );
        return result.rows;
    } catch (error) {
        console.error('Failed to fetch learners:', error);
        return [];
    }
}

export default async function LearnersPage() {
    const learners = await getLearners();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Learners Management</h1>
                    <p className="text-muted-foreground">
                        Manage registered users and their access
                    </p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Learners ({learners.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {learners.length === 0 ? (
                            <p className="text-center text-muted-foreground py-8">
                                No learners registered yet
                            </p>
                        ) : (
                            learners.map((learner: any) => (
                                <div
                                    key={learner.id}
                                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-semibold">{learner.name || 'Unnamed User'}</h3>
                                            <Badge variant={learner.role === 'admin' ? 'default' : 'secondary'}>
                                                {learner.role || 'user'}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Mail className="w-4 h-4" />
                                                {learner.email}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                Joined {new Date(learner.created_at).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
