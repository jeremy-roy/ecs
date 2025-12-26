'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from '@/components/ui/sheet';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-32 md:h-12 md:w-40">
            <Image
              src="/branding/EC-logo-grey.png"
              alt="Eden Construction Services"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium hover:text-primary transition-colors text-gray-900"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-primary transition-colors text-gray-900"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-primary transition-colors text-gray-900"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="default"
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-900">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-4">
              <div className="relative h-10 w-32 mb-6">
                <Image
                  src="/branding/EC-logo-grey.png"
                  alt="Eden Construction Services"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => scrollToSection('services')}
                className="text-lg font-medium text-left hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-lg font-medium text-left hover:text-primary transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-lg font-medium text-left hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
