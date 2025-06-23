import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Quote } from 'lucide-react';
import { AppBar } from '@/components/AppBar';

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
  { id: 'client1', name: "Innovate Corp", logoUrl: "https://megapower-mea.com/wp-content/uploads/2023/08/New-Project-8.jpg", dataAiHint: "company logo" },
  { id: 'client2', name: "Quantum Solutions", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "tech logo" },
  { id: 'client3', name: "Apex Industries", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "industrial logo" },
  { id: 'client4', name: "Horizon Digital", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "digital logo" },
  { id: 'client5', name: "EcoGoods", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "green logo" },
  { id: 'client6', name: "Pinnacle Finance", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "finance logo" },
  { id: 'client7', name: "NextGen Med", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "medical logo" },
  { id: 'client8', name: "Starlight Studios", logoUrl: "https://placehold.co/150x75.png", dataAiHint: "media logo" },
];

const testimonials: Testimonial[] = [
  { id: 'test1', name: "Jane Doe", title: "CEO", company: "Innovate Corp", quote: "Working with Megapower was a game-changer for our business. Their strategic insights and technical expertise led to a 50% increase in user engagement. Truly a catalyst for growth!", avatarUrl: "https://placehold.co/100x100.png" },
  { id: 'test2', name: "John Smith", title: "CTO", company: "Quantum Solutions", quote: "The team at Megapower is unparalleled. They delivered a complex software solution on time and on budget, exceeding all our expectations. I can't recommend them highly enough.", avatarUrl: "https://placehold.co/100x100.png" },
  { id: 'test3', name: "Emily White", title: "Marketing Director", company: "EcoGoods", quote: "Their design team is phenomenal. They captured our brand essence perfectly and created a user experience that our customers love. A pleasure to work with from start to finish.", avatarUrl: "https://placehold.co/100x100.png" },
  { id: 'test4', name: "Michael Brown", title: "Founder", company: "Starlight Studios", quote: "As a startup, we needed a partner who was both flexible and expert. Megapower was that and more. They guided us through the entire product development lifecycle.", avatarUrl: "https://placehold.co/100x100.png" },
];

export default function ClientsPage() {
  return (
    <>
      <AppBar title="Our Clients" />
      <div className="bg-background">
        <div className="max-w-sm mx-auto p-4 space-y-8">
          <p className="text-center text-muted-foreground">
            We are proud to have collaborated with a diverse range of industry leaders and innovators.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl">Trusted By</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 items-center">
                {clients.slice(0, 6).map(client => (
                  <div key={client.id} className="flex justify-center opacity-60 hover:opacity-100 transition-all duration-300">
                    <Image src={client.logoUrl} alt={client.name} width={150} height={75} objectFit="contain" data-ai-hint={client.dataAiHint} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <section>
            <header className="text-center mb-4">
              <h2 className="text-2xl font-bold tracking-tight">What Our Clients Say</h2>
            </header>
            
            <ScrollArea className="w-full whitespace-nowrap rounded-lg">
              <div className="flex w-max space-x-4 p-1">
                {testimonials.map(testimonial => (
                  <Card key={testimonial.id} className="w-[300px] whitespace-normal flex-shrink-0">
                    <CardContent className="p-6">
                      <Quote className="h-6 w-6 text-primary mb-3" />
                      <p className="text-muted-foreground text-sm mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Image src={testimonial.avatarUrl} alt={testimonial.name} width={40} height={40} className="rounded-full mr-3" data-ai-hint="person portrait" />
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
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
    </>
  );
}
