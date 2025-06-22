import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, BarChart3, PenTool, Search, CloudCog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const coreServices: Service[] = [
  {
    title: "Digital Strategy",
    description: "Crafting data-driven roadmaps to navigate the digital landscape and achieve your business goals.",
    icon: BarChart3,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, engaging, and aesthetically pleasing user interfaces that provide meaningful experiences.",
    icon: PenTool,
  },
  {
    title: "Brand Identity",
    description: "Building strong, memorable brand identities that resonate with your target audience and stand the test of time.",
    icon: Zap,
  },
  {
    title: "Market Research",
    description: "Uncovering valuable market insights to inform strategy, identify opportunities, and mitigate risks.",
    icon: Search,
  },
];

const technicalServices: Service[] = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications using modern technologies.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    description: "Developing native and cross-platform mobile apps for iOS and Android to connect with users on the go.",
    icon: Code,
  },
  {
    title: "Cloud Solutions",
    description: "Leveraging cloud infrastructure for scalable, secure, and efficient business operations.",
    icon: CloudCog,
  },
  {
    title: "E-commerce Platforms",
    description: "Creating robust and user-friendly online stores to drive sales and grow your business.",
    icon: Code,
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div className="p-3 bg-primary/10 rounded-full">
        <service.icon className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="text-xl">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{service.description}</p>
    </CardContent>
  </Card>
);

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From creative inception to technical execution, we offer a comprehensive suite of services to bring your vision to life.
          </p>
        </header>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="core">Core Services</TabsTrigger>
            <TabsTrigger value="technical">Technical Services</TabsTrigger>
          </TabsList>
          <TabsContent value="core" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="technical" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
