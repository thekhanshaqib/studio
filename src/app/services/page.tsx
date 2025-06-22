import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppBar } from '@/components/AppBar';

type Service = {
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
};

const coreServices: Service[] = [
  {
    title: "Digital Strategy",
    description: "Crafting data-driven roadmaps to navigate the digital landscape and achieve your business goals.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "digital strategy",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces that provide meaningful experiences.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "user interface",
  },
  {
    title: "Brand Identity",
    description: "Building strong, memorable brand identities that resonate with your target audience.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "brand logo",
  },
  {
    title: "Market Research",
    description: "Uncovering valuable market insights to inform strategy and identify opportunities.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "market research",
  },
];

const technicalServices: Service[] = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications using modern technologies.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "web development",
  },
  {
    title: "Mobile App Development",
    description: "Developing native and cross-platform mobile apps for iOS and Android.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app",
  },
  {
    title: "Cloud Solutions",
    description: "Leveraging cloud infrastructure for scalable, secure, and efficient business operations.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "cloud computing",
  },
  {
    title: "E-commerce Platforms",
    description: "Creating robust and user-friendly online stores to drive sales and grow your business.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "ecommerce shopping",
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl rounded-lg">
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <Image
        src={service.imageUrl}
        alt={service.title}
        layout="fill"
        objectFit="cover"
        data-ai-hint={service.dataAiHint}
        className="transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm line-clamp-2">{service.description}</p>
    </CardContent>
  </Card>
);

export default function ServicesPage() {
  return (
    <>
      <AppBar title="Our Services" />
      <div className="bg-background">
        <div className="max-w-4xl mx-auto p-4">
          <p className="text-center text-muted-foreground mb-8">
            From creative inception to technical execution, we offer a comprehensive suite of services to bring your vision to life.
          </p>

          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="core">Core Services</TabsTrigger>
              <TabsTrigger value="technical">Technical Services</TabsTrigger>
            </TabsList>
            <TabsContent value="core" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {coreServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </TabsContent>
            <TabsContent value="technical" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {technicalServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
