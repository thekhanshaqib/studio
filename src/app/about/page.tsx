import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AppBar } from '@/components/AppBar';

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
    <>
      <AppBar title={`About ${companyInfo.name}`} />
      <div className="bg-background">
        <div className="max-w-sm mx-auto p-4 space-y-8">
          
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Our modern office"
                layout="fill"
                objectFit="cover"
                data-ai-hint="modern office"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in {companyInfo.founded}, {companyInfo.name} began with a simple yet powerful idea: to be a catalyst for change in the digital landscape. Over the years, we have grown into a dynamic team of strategists, designers, and developers passionate about solving complex challenges and creating impactful digital experiences.
              </p>
            </div>
          </div>

          <Card>
              <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">{companyInfo.mission}</p>
              </CardContent>
          </Card>
           <Card>
              <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">{companyInfo.vision}</p>
              </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold tracking-tight">Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                {companyInfo.values.map(value => (
                  <div key={value} className="flex flex-col items-center">
                    <div className="bg-primary/10 rounded-full p-2 mb-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Join Our Journey</h2>
            <p className="text-muted-foreground mb-4">
              Let's create something amazing together.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
