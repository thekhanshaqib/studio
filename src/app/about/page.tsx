import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AppBar } from '@/components/AppBar';

const companyInfo = {
  name: "Megapower Electromechanical LLC",
  founded: "2005",
  mission: "To provide powerful and reliable electromechanical solutions that drive progress and performance for our clients.",
  vision: "To be a globally recognized leader in the electromechanical industry, renowned for our engineering excellence and customer commitment.",
  values: [
    "Performance",
    "Integrity",
    "Client-Centricity",
    "Excellence",
    "Innovation"
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
                alt="Our modern workshop"
                layout="fill"
                objectFit="cover"
                data-ai-hint="modern workshop"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in {companyInfo.founded}, {companyInfo.name} has grown from a small workshop to a leading provider of electromechanical services. Our pride is in our performance, and our story is one of consistent growth, driven by a passion for engineering and a commitment to our clients.
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
              Let's build something powerful together.
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
