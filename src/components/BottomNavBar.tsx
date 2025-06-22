"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Briefcase, Gem, Award, Users, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: Gem },
  { href: '/products', label: 'Products', icon: ShoppingBag },
  { href: '/awards', label: 'Awards', icon: Award },
  { href: '/clients', label: 'Clients', icon: Users },
];

export function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t shadow-t-lg z-50">
      <div className="flex justify-around items-center h-full max-w-5xl mx-auto px-4">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link href={href} key={label} className={cn(
              "flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200 w-16",
              isActive && "text-primary"
            )}>
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
