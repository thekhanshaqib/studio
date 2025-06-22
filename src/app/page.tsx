
"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Info, Cog, Briefcase, Award, Quote, ShoppingBag } from 'lucide-react';
import { AppBar } from '@/components/AppBar';

const pageLinks = [
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/services', label: 'Services', icon: Cog },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/products', label: 'Machinery & Products', icon: ShoppingBag },
  { href: '/awards', label: 'Awards & Certificates', icon: Award },
  { href: '/clients', label: 'Testimonials', icon: Quote },
];

const bannerImages = [
    { src: "https://images.unsplash.com/photo-1528601549403-51883c533924?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Banner 1", dataAiHint: "construction project" },
    { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Banner 2", dataAiHint: "building site" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Banner 3", dataAiHint: "construction crane" },
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <>
      <AppBar isHomePage />
      <div className="flex flex-col items-center bg-background">
        <div className="w-full max-w-sm mx-auto p-4">
          
          {/* Banner Carousel */}
          <Carousel
            plugins={[plugin.current]}
            className="w-full mb-6"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {bannerImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      data-ai-hint={image.dataAiHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>

          {/* Navigation List */}
          <div className="flex flex-col space-y-3">
            {pageLinks.map((item) => (
              <Link href={item.href} key={item.href} passHref>
                <Button variant="outline" size="lg" className="w-full h-14 text-base justify-start border-gray-300 shadow-sm">
                  <item.icon className="mr-4 h-6 w-6 text-primary" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
