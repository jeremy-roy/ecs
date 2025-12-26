'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm hover:-translate-y-1">
            <CardHeader className="text-center pt-8">
                <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="relative w-10 h-10">
                        <Image
                            src={icon}
                            alt={title}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
