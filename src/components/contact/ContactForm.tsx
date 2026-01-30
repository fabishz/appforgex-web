'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
    email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
    phone: z.string().trim().max(20, 'Phone number must be less than 20 characters').optional(),
    company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
    subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
    message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const validatedData = contactSchema.parse(formData);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(validatedData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast({
                title: 'Message sent successfully!',
                description: "We'll get back to you within 24 hours.",
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: '',
            });
            setErrors({});
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
                error.errors.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
                    }
                });
                setErrors(fieldErrors);
            } else {
                toast({
                    title: 'Error',
                    description: "Failed to send message. Please try again later.",
                    variant: "destructive"
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                            <p className="text-destructive text-sm mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                            <p className="text-destructive text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone
                        </label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (234) 567-890"
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company
                        </label>
                        <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full glow-effect hover:glow-effect-strong"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}
