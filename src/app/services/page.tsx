
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppBar } from '@/components/AppBar';
import cement from '@/assets/cement.png';
import construction from '@/assets/construction.png';
import duct from '@/assets/duct.png';
import electrical from '@/assets/electrical.png';
import testing from '@/assets/testing.png';
import mep from '@/assets/mep.png';
import heavylifting from '@/assets/heavy-lifting.png';
import orc from '@/assets/ORC.png';
import mechanical from '@/assets/mechanical_contract_1.png';
import haul from '@/assets/haul.png';
import { StaticImageData } from 'next/image';

type Service = {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  dataAiHint: string;
};

const coreServices: Service[] = [
  {
    title: "Mechanical Contracting",
    description: "We specialize in mechanical installations across Power Plants, Cement Plants, and industrial facilities — including piping systems, turbines, steel structures, vertical mills, and clinker transport systems. Trusted by high-profile clients across the UAE, Mega Power is recognized for precision execution and long-term reliability.",
    imageUrl: mechanical,
    dataAiHint: "mechanical",
  },
  {
    title: "Electrical & Instrumentation",
    description: "From underground cabling networks (LV, 11KV, 33KV) to advanced instrumentation systems, our team handles end-to-end services including survey, design, cable laying, jointing, and commissioning. Our expertise ensures your projects meet national safety, performance, and compliance standards.",
    imageUrl: electrical,
    dataAiHint: "electrical",
  },
  {
    title: "Testing & Commissioning",
    description: "We ensure electrical systems are compliant, safe, and operationally fit through advanced testing protocols. Our services include relay coordination, fault studies, arc flash analysis, and harmonic studies — empowering clients with safe, reliable power distribution.",
    imageUrl: testing,
    dataAiHint: "testing commissioning",
  },
  {
    title: "Construction Management",
    description: "Mega Power delivers turnkey construction services for mechanical and electrical infrastructure in cement plants, WHR/ORC power plants, and industrial buildings. Our integrated approach blends engineering, project management, and execution under one roof.",
    imageUrl: construction,
    dataAiHint: "construction",
  },
  {
    title: "MEP Installation & Maintenance",
    description: "We provide complete MEP services — mechanical, electrical, plumbing — and preventive maintenance to ensure long-term performance and safety. Our experienced team eliminates defects like poor plumbing, faulty fittings, and subpar installations that compromise structural efficiency.",
    imageUrl: mep,
    dataAiHint: "installation maintenance",
  },
  {
    title: "Heavy Lifting & Logistics",
    description: "Our rigging division delivers safe and efficient heavy lifting solutions using specialized equipment and expert crews. From project planning to on-site execution, we handle complex rigging and logistics with a focus on safety and precision.",
    imageUrl: heavylifting,
    dataAiHint: "lifting logistics",
  },
  {
    title: "ORC WH Power Plant Solutions",
    description: "With over a decade of experience, Mega Power is a trusted provider of ORC Waste Heat Recovery power plant installations. We offer design, engineering, procurement, commissioning, and maintenance — helping clients generate clean energy, optimize heat utilization, and reduce costs.",
    imageUrl: orc,
    dataAiHint: "power plant",
  },
  {
    title: "Cement Sector",
    description: "Mega Power is a trusted partner for end-to-end mechanical and electrical services in the cement industry. Our expertise covers equipment installation, raw material handling systems, vertical mills, clinker conveyors, ducting, and plant-wide MEP works. We ensure optimized operations through reliable construction, maintenance, and retrofitting of cement plant infrastructure. With deep domain experience and skilled execution, we help cement manufacturers achieve operational efficiency, safety, and long-term sustainability.",
    imageUrl: cement,
    dataAiHint: "power plant",
  },
];

const technicalServices: Service[] = [
  {
    title: "Erection & Fabrication",
    description: "We offer comprehensive fabrication and erection services — from structural steel, ducting, hoppers, heat exchangers to material handling systems and utility piping. Backed by precision engineering and quality control, we ensure flawless installations in industrial environments.",
    imageUrl: duct,
    dataAiHint: "erection fabrication",
  },
  {
    title: "Replacement & Overhauling",
    description: "We specialize in the replacement and refurbishment of critical components like bag house fans, shell liners, cooling towers, cyclone dip tubes, and crusher rotors. Our team ensures restored performance, extended asset life, and minimized downtime.",
    imageUrl: haul,
    dataAiHint: "replacement overhauling",
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
      <p className="text-muted-foreground text-sm">{service.description}</p>
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
            <div className="sticky top-20 z-10 bg-background py-2 border-b">
                <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="core">Core Services</TabsTrigger>
                <TabsTrigger value="technical">Technical Services</TabsTrigger>
                </TabsList>
            </div>
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
