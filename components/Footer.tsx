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
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Residential Construction</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Commercial Projects</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Renovations</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>123 Construction Ave,<br />Building City, BC 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:info@edenconstruction.com" className="hover:text-white transition-colors">info@edenconstruction.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Eden Construction Services. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all text-gray-400">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all text-gray-400">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all text-gray-400">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
