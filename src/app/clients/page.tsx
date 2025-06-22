import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Quote } from 'lucide-react';

type Client = {
  id: string;
  name: string;
  logoUrl: string;
  dataAiHint: string;
};

type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatarUrl: string;
};

const clients: Client[] = [
  { id: 'client1', name: "Innovate Corp", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "company logo" },
  { id: 'client2', name: "Quantum Solutions", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "tech logo" },
  { id: 'client3', name: "Apex Industries", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "industrial logo" },
  { id: 'client4', name: "Horizon Digital", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "digital logo" },
  { id: 'client5', name: "EcoGoods", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "green logo" },
  { id: 'client6', name: "Pinnacle Finance", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "finance logo" },
  { id: 'client7', name: "NextGen Med", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "medical logo" },
  { id: 'client8', name: "Starlight Studios", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "media logo" },
];

const testimonials: Testimonial[] = [
  { id: 'test1', name: "Jane Doe", title: "CEO", company: "Innovate Corp", quote: "Working with Catalyst was a game-changer for our business. Their strategic insights and technical expertise led to a 50% increase in user engagement. Truly a catalyst for growth!", avatarUrl: "https://placehold.co/100x100.png" },
  { id: 'test2', name: "John Smith", title: "CTO", company: "Quantum Solutions", quote: "The team at Catalyst is unparalleled. They delivered a complex software solution on time and on budget, exceeding all our expectations. I can't recommend them highly enough.", avatarUrl: "https://placehold.co/100x100.png" },
  { id: 'test3', name: "Emily White", title: "Marketing Director", company: "EcoGoods", quote: "Their design team is phenomenal. They captured our brand essence perfectly and created a user experience that our customers love. A pleasure to work with from start to finish.", avatarUrl: "https://placehold.co/100x100.png" },
  { id: 'test4', name: "Michael Brown", title: "Founder", company: "Starlight Studios", quote: "As a startup, we needed a partner who was both flexible and expert. Catalyst was that and more. They guided us through the entire product development lifecycle.", avatarUrl: "https://placehold.co/100x100.png" },
];

export default function ClientsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">Our Clients &amp; Partners</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to have collaborated with a diverse range of industry leaders and innovators.
          </p>
        </header>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Trusted By</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
              {clients.map(client => (
                <div key={client.id} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src={client.logoUrl} alt={client.name} width={150} height={75} objectFit="contain" data-ai-hint={client.dataAiHint} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <section>
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-2 text-md text-muted-foreground">Words of appreciation from those we've worked with.</p>
          </header>
          
          <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex w-max space-x-6 p-4">
              {testimonials.map(testimonial => (
                <Card key={testimonial.id} className="w-[350px] whitespace-normal flex-shrink-0">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Image src={testimonial.avatarUrl} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" data-ai-hint="person portrait" />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </div>
    </div>
  );
}
