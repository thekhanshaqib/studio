"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Lightbulb, Briefcase, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const navItems = [
  { href: '/about', label: 'About Us', icon: Building, description: 'Learn more about our company' },
  { href: '/services', label: 'Our Services', icon: Lightbulb, description: 'Discover what we can do for you' },
  { href: '/projects', label: 'Our Projects', icon: Briefcase, description: 'See our completed work' },
  { href: '/awards', label: 'Our Awards', icon: Award, description: 'Recognitions of our excellence' },
];

const featuredProjects = [
    {
      id: 'p1',
      title: "Project Phoenix",
      category: "Web Application",
      description: "A comprehensive enterprise resource planning (ERP) system designed to streamline operations for a major logistics company.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "logistics dashboard",
    },
    {
      id: 'c1',
      title: "E-Shopify Redesign",
      category: "E-commerce",
      description: "A full redesign and migration of a popular online fashion retailer to a modern, headless e-commerce architecture.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "fashion website",
    },
    {
      id: 'c2',
      title: "HealthWell Platform",
      category: "Healthcare",
      description: "A secure patient portal for a regional hospital network, allowing patients to book appointments, view medical records, and communicate with healthcare providers.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "healthcare portal",
    },
    {
      id: 'p2',
      title: "InnovateApp",
      category: "Mobile App",
      description: "A cross-platform mobile application for a fintech startup, enabling users to manage investments and track market trends with a highly intuitive interface.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "fintech app",
    },
    {
      id: 'c3',
      title: "Artisan's Marketplace",
      category: "Web Platform",
      description: "An online marketplace connecting artisans with buyers worldwide. Features included multi-vendor support, secure payments, and a custom review system.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "online marketplace",
    }
  ];

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

  return (
    <div className="flex flex-col items-center bg-background">
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Hero Section */}
        <Card className="w-full overflow-hidden shadow-lg border-none bg-gradient-to-r from-primary to-red-800 text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Catalyst for Your Success</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-6">
                We are the spark that ignites innovation and drives growth. Discover our portfolio of excellence.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative w-full h-64 md:h-auto md:w-1/2">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Team working"
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint="teamwork collaboration"
                  className="brightness-90"
                />
            </div>
          </div>
        </Card>

        {/* Introduction */}
        <section className="text-center my-12 md:my-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Your Vision, Our Expertise</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            At Catalyst, we blend creative strategy with technical prowess to deliver solutions that not only meet but exceed expectations. Explore our work and see how we can be the catalyst for your next big idea.
          </p>
        </section>

        {/* Featured Projects Carousel */}
        <section className="my-12 md:my-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Featured Projects</h2>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={project.dataAiHint}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/projects">View Project</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </section>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} className="group">
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <item.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">{item.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
