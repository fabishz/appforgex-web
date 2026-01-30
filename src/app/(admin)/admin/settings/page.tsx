
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-muted-foreground">
                    Configure platform settings and preferences
                </p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Platform Settings</CardTitle>
                        <CardDescription>General configuration options</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">User Registration</h3>
                                <p className="text-sm text-muted-foreground">Allow new users to register</p>
                            </div>
                            <Button variant="outline">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Email Notifications</h3>
                                <p className="text-sm text-muted-foreground">Manage email templates and settings</p>
                            </div>
                            <Button variant="outline">Configure</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Database</CardTitle>
                        <CardDescription>Database management and maintenance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Backup Database</h3>
                                <p className="text-sm text-muted-foreground">Create a backup of all data</p>
                            </div>
                            <Button variant="outline">Backup</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
