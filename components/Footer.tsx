import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative h-12 w-48">
                            <Image
                                src="/branding/ECS-logo-white-.png"
                                alt="Eden Construction Services"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-300 max-w-sm">
                            Professional construction services delivering quality craftsmanship and reliability for residential and commercial projects.
                        </p>
                        <div className="flex items-start gap-3 text-gray-300">
                            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Carlisle, Cumbria, UK</span>
                        </div>
                    </div>

                    {/* Certification */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Accreditation</h3>
                        <div className="relative w-[100%] aspect-[2/1] mx-auto md:mx-0">
                            <Image
                                src="/branding/niceic_dis_logo_white.jpg"
                                alt="NICEIC Approved Contractor"
                                fill
                                className="object-contain object-left md:object-center"
                            />
                        </div>
                    </div>

                    {/* Service Area & Certification */}
                    <div className="space-y-6">
                        <div>
                            <a
                                href="https://www.google.com/search?q=Eden+Construction+Services+Carlisle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
                            >
                                <span>Find us on Google</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Eden Construction Services. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/EdenConstructionServices" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all text-gray-400">
                            <Facebook className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
