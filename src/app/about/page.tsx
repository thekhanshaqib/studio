import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const companyInfo = {
  name: "Catalyst Inc.",
  founded: "2010",
  mission: "To be the spark that ignites innovation and drives sustainable growth for our clients through creative strategies and technological excellence.",
  vision: "To be a globally recognized leader in digital transformation, known for our commitment to quality, integrity, and client success.",
  values: [
    "Innovation",
    "Integrity",
    "Client-Centricity",
    "Excellence",
    "Collaboration"
  ]
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">About {companyInfo.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our journey, our mission, and the values that drive us to deliver exceptional results.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Our modern office"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern office"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in {companyInfo.founded}, {companyInfo.name} began with a simple yet powerful idea: to be a catalyst for change in the digital landscape. Over the years, we have grown into a dynamic team of strategists, designers, and developers passionate about solving complex challenges and creating impactful digital experiences.
            </p>
            <p className="text-muted-foreground">
              We believe in building partnerships, not just projects. Our collaborative approach ensures we are perfectly aligned with our clients' goals, enabling us to deliver solutions that are not only effective but also enduring.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{companyInfo.mission}</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{companyInfo.vision}</p>
                </CardContent>
            </Card>
        </div>

        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">Core Values</CardTitle>
            <p className="text-muted-foreground">The principles that guide our work and culture.</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
              {companyInfo.values.map(value => (
                <div key={value} className="flex flex-col items-center">
                  <div className="bg-primary/10 rounded-full p-3 mb-2">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We are always looking for passionate talent and exciting new projects. Let's create something amazing together.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
