import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AppBar } from '@/components/AppBar';

const companyInfo = {
  name: "Megapower Electromechanical LLC",
  founded: " January 2010",
  mission: "To deliver reliable, high-quality Electro-Mechanical solutions through expert engineering, ethical practices, and a customer-first mindset.",
  vision: "To be recognized as a leading contracting partner, setting benchmarks in technical excellence, trust, and long-term impact across industries.",
  values: [
    "Integrity",
    "Excellence",
    "Innovation",
    "Commitment",
    "Accountability",
    "Collaboration"
  ]
};

export default function AboutPage() {
  return (
    <>
      <AppBar title={`About Megapower`} />
      <div className="bg-background">
        <div className="max-w-sm mx-auto p-4 space-y-8">
          
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1668243304495-4427bf1754cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our modern workshop"
                layout="fill"
                objectFit="cover"
                data-ai-hint="modern workshop"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Our Story</h2>
              <p className="text-sm text-muted-foreground">
                Founded in {companyInfo.founded}, {companyInfo.name} is a trusted name in Mechanical, Civil, Electrical & Instrumentation contracting. Backed by over 20 years of proven capability, we bring together expert engineering, design, and project execution across Electro-Mechanical works — from equipment supply to testing, commissioning, and maintenance. Our team’s dedication, experience, and professionalism set us apart in delivering complex infrastructure with precision.
              </p>
            </div>
          </div>

          <Card>
              <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-sm text-muted-foreground">{companyInfo.mission}</p>
              </CardContent>
          </Card>
           <Card>
              <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-sm text-muted-foreground">{companyInfo.vision}</p>
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
                    <span className="font text-xs">{value}</span>
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
