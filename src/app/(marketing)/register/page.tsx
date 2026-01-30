
import RegisterForm from '@/components/auth/RegisterForm';
import { UserPlus } from 'lucide-react';

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-muted/20 py-12">
            <div className="w-full max-w-md p-8 bg-card border border-border rounded-2xl shadow-lg">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl mb-4 text-primary">
                        <UserPlus className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <p className="text-muted-foreground text-center mt-2">
                        Join our learning platform today.
                    </p>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
}
