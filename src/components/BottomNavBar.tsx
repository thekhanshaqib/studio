
"use client";

import Link from 'next/link';
import { Contact2, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 448 512" {...props}>
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19 19.3-71.1-4.5-7.4c-18.5-30.7-28.2-66.5-28.2-103.3 0-108.6 88.4-197 197-197s197 88.4 197 197-88.4 197-197 197zm88.6-114.8c-3.8-2-22.5-11.1-26-12.4-3.5-1.4-6-1.9-8.6 1.9s-9.9 12.4-12.1 15c-2.3 2.6-4.5 2.9-8.3 1s-16-5.9-30.5-18.7c-11.3-9.9-19.1-22.1-21.3-25.9-2.3-3.8-0.2-5.9 1.8-7.8s3.9-4.5 5.9-6.8c2-2.3 2.6-3.8 1.8-6.3-0.8-2.6-8.6-20.7-11.8-28.5-3.1-7.8-6.3-6.7-8.6-6.8-2.1-0.1-4.5-0.1-6.8-0.1s-6.3 0.9-9.5 3.8c-3.1 2.9-12.1 11.8-12.1 28.5 0 16.7 12.4 33.1 14.2 35.3 1.8 2.3 24.1 36.8 58.4 51.4 8.5 3.6 15.2 5.8 20.3 7.4 10.3 3.3 19.6 2.8 26.7 1.8 7.8-1.1 22.5-9.2 25.6-18.1 3.1-8.9 3.1-16.4 2.3-18.1-0.8-1.7-3-2.6-6.8-4.6z"/>
    </svg>
);

const iconLinks = [
  { href: '/contact', label: 'Save Contact', icon: Contact2 },
  { href: 'tel:+97143960292', label: 'Contact Us', icon: Phone },
  { href: 'https://wa.me/971501416416', label: 'WhatsApp', icon: WhatsAppIcon },
];

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-4 left-5 right-5 z-50 pointer-events-none">
      <div className="w-[90%] max-w-sm mx-auto pointer-events-auto bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between items-center h-full p-4">
            <Button asChild className="bg-black text-white hover:bg-zinc-800 rounded-full h-10 px-4 font-semibold text-sm">
                <Link href="/contact">Get Started</Link>
            </Button>
            <div className="flex items-center space-x-7">
                {iconLinks.map(({ href, label, icon: Icon }) => {
                    const isInternal = href.startsWith('/');
                    const commonProps = {
                        className: cn("flex items-center justify-center group transition-colors duration-200")
                    };
                    const content = <Icon className={cn("h-7 w-7 text-primary")} />;

                    if (isInternal) {
                        return (
                            <Link key={label} href={href} {...commonProps} aria-label={label}>
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            {...commonProps}
                            aria-label={label}
                        >
                            {content}
                        </a>
                    );
                })}
            </div>
        </div>
      </div>
    </nav>
  );
}
