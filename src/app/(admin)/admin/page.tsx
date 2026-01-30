
import { auth } from '@/auth';
import { query } from '@/lib/db';
import { Users, BookOpen, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function getStats() {
    try {
        const usersResult = await query('SELECT COUNT(*) as count FROM users');
        const totalUsers = usersResult.rows[0]?.count || 0;

        return {
            totalUsers: parseInt(totalUsers),
            totalCourses: 12, // From training-data.ts
            activeEnrollments: Math.floor(parseInt(totalUsers) * 0.6), // Mock calculation
            completionRate: 68, // Mock percentage
        };
    } catch (error) {
        console.error('Failed to fetch stats:', error);
        return {
            totalUsers: 0,
            totalCourses: 12,
            activeEnrollments: 0,
            completionRate: 0,
        };
    }
}

export default async function AdminDashboard() {
    const session = await auth();
    const stats = await getStats();

    const statCards = [
        {
            title: 'Total Learners',
            value: stats.totalUsers,
            icon: Users,
            description: 'Registered users',
            color: 'text-blue-500',
        },
        {
            title: 'Total Courses',
            value: stats.totalCourses,
            icon: BookOpen,
            description: 'Available courses',
            color: 'text-green-500',
        },
        {
            title: 'Active Enrollments',
            value: stats.activeEnrollments,
            icon: TrendingUp,
            description: 'Currently enrolled',
            color: 'text-purple-500',
        },
        {
            title: 'Completion Rate',
            value: `${stats.completionRate}%`,
            icon: Award,
            description: 'Average completion',
            color: 'text-orange-500',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back, {session?.user?.name || 'Admin'}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <Icon className={`w-5 h-5 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                        <h3 className="font-semibold mb-1">Manage Learners</h3>
                        <p className="text-sm text-muted-foreground">View and manage user accounts</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                        <h3 className="font-semibold mb-1">Add Content</h3>
                        <p className="text-sm text-muted-foreground">Create new courses and lessons</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                        <h3 className="font-semibold mb-1">View Reports</h3>
                        <p className="text-sm text-muted-foreground">Analytics and insights</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
