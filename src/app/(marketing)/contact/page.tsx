
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { ContactForm } from '@/components/contact/ContactForm';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Us',
        content: 'contact@appforgex.com',
        href: 'mailto:contact@appforgex.com',
    },
    {
        icon: Phone,
        title: 'Call Us',
        content: '+1 (234) 567-890',
        href: 'tel:+1234567890',
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        content: '+1 (234) 567-890',
        href: 'https://wa.me/1234567890',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        content: 'San Francisco, CA',
        href: '#',
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section-padding hero-gradient">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up opacity-0">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
                            Let's <span className="gradient-text">Connect</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-2">
                            Have a project in mind? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.title}
                                        href={info.href}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-200 group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <info.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{info.title}</h4>
                                            <p className="text-muted-foreground">{info.content}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
