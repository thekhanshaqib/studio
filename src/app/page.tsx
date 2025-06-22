import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Lightbulb, Briefcase, Award } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '/about', label: 'About Us', icon: Building, description: 'Learn more about our company' },
  { href: '/services', label: 'Our Services', icon: Lightbulb, description: 'Discover what we can do for you' },
  { href: '/projects', label: 'Our Projects', icon: Briefcase, description: 'See our completed work' },
  { href: '/awards', label: 'Our Awards', icon: Award, description: 'Recognitions of our excellence' },
];

export default function Home() {
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
