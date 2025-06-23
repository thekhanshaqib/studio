
"use client";

import Link from 'next/link';
import { Contact2, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    width="24"
    height="24"
    {...props}
  >
    <path d="M16.001 2.944c-7.255 0-13.057 5.802-13.057 13.057 0 2.323.61 4.59 1.767 6.593l-1.873 6.851 7.011-1.838c1.926 1.05 4.083 1.605 6.152 1.605 7.255 0 13.057-5.802 13.057-13.057S23.256 2.944 16 2.944zm7.435 18.267c-.31.867-1.782 1.597-2.455 1.704-.63.093-1.403.132-2.267-.143-.52-.162-1.19-.388-2.054-.76-3.615-1.565-5.979-5.465-6.165-5.724-.186-.26-1.47-1.951-1.47-3.725s.936-2.641 1.27-2.992c.31-.322.687-.402.915-.402.236 0 .453.002.648.012.206.01.487-.08.761.58.294.695.997 2.403 1.084 2.58.084.178.14.38.028.612-.11.23-.166.37-.328.57-.164.2-.342.446-.488.597-.164.167-.336.349-.144.684.19.334.849 1.398 1.82 2.266 1.25 1.118 2.309 1.462 2.644 1.626.338.165.534.14.734-.083.2-.222.838-.974 1.06-1.31.222-.336.448-.278.761-.167.313.11 1.97.927 2.308 1.096.337.17.56.25.642.392.08.142.08.823-.23 1.69z" />
  </svg>
);


const iconLinks = [
  { href: '/contact', label: 'Contact', icon: Contact2 },
  { href: 'tel:+97143960292', label: 'Call', icon: Phone },
  { href: 'https://wa.me/971567254555', label: 'WhatsApp', icon: WhatsAppIcon },
];

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-4 left-2 right-2 z-50 pointer-events-none">
      <div className="w-[90%] max-w-sm mx-auto pointer-events-auto bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between items-center h-full p-3">
            <Button asChild className="bg-black text-white hover:bg-zinc-800 rounded-full h-10 px-4 font-semibold text-sm">
                <Link href="/contact">Get Started</Link>
            </Button>
            <div className="flex items-center space-x-4">
                {iconLinks.map(({ href, label, icon: Icon }) => {
                    const isInternal = href.startsWith('/');
                    const commonProps = {
                        className: cn("flex flex-col items-center justify-center group transition-colors duration-200 text-center")
                    };
                    const content = (
                      <>
                        <Icon className={cn("h-6 w-6 text-primary")} />
                        <span className="text-xs text-primary font-medium mt-1">{label}</span>
                      </>
                    );

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
