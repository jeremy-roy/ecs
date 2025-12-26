'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <Card className="max-w-md mx-auto border-none shadow-lg bg-white/5 backdrop-blur-sm">
                <CardContent className="pt-6 text-center py-12">
                    <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                    <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                    >
                        Send Another Message
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="max-w-xl mx-auto border-none shadow-xl">
            <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                    Fill out the form below and we'll get back to you with a quote.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Name
                            </label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Email
                            </label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Phone (Optional)
                        </label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Service Interested In
                        </label>
                        <Input id="service" placeholder="e.g. Kitchen Renovation" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Project Details
                        </label>
                        <Textarea
                            id="message"
                            placeholder="Tell us about your project..."
                            className="min-h-[120px]"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
