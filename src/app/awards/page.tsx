import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from 'lucide-react';

type AwardItem = {
  id: string;
  title: string;
  issuer: string;
  year: number;
  description: string;
  imageUrl: string;
  dataAiHint: string;
};

const awards: AwardItem[] = [
  { id: 'aw1', title: "Innovation in Tech Award", issuer: "Global Tech Forum", year: 2023, description: "Recognized for our groundbreaking work on the Quantum Analytics platform.", imageUrl: "https://placehold.co/400x300.png", dataAiHint: "gold trophy" },
  { id: 'aw2', title: "Best UI/UX Design", issuer: "Design Weekly", year: 2023, description: "Awarded for the intuitive and user-centric design of the HealthWell Patient Portal.", imageUrl: "https://placehold.co/400x300.png", dataAiHint: "design award" },
  { id: 'aw3', title: "Top Developer Tool", issuer: "Dev-Choice Awards", year: 2022, description: "ConnectAPI was voted the top tool for third-party integrations by the developer community.", imageUrl: "https://placehold.co/400x300.png", dataAiHint: "certificate plaque" },
  { id: 'aw4', title: "E-commerce Excellence", issuer: "Retail Business Awards", year: 2021, description: "Acknowledged for the successful redesign and performance uplift of E-Shopify.", imageUrl: "https://placehold.co/400x300.png", dataAiHint: "glass award" },
  { id: 'aw5', title: "Fastest Growing Company", issuer: "Business Today", year: 2020, description: "Featured as one of the fastest-growing tech companies in the region.", imageUrl: "https://placehold.co/400x300.png", dataAiHint: "award medal" },
  { id: 'aw6', title: "Certificate of Quality", issuer: "ISO 9001", year: 2022, description: "Certified for maintaining the highest standards in quality management systems.", imageUrl: "https://placehold.co/400x300.png", dataAiHint: "official certificate" },
];

const AwardCard = ({ award }: { award: AwardItem }) => (
  <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 w-full overflow-hidden bg-muted">
      <Image
        src={award.imageUrl}
        alt={award.title}
        layout="fill"
        objectFit="contain"
        className="p-4 transition-transform duration-500 group-hover:scale-105"
        data-ai-hint={award.dataAiHint}
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl">{award.title}</CardTitle>
      <CardDescription className="font-semibold text-primary">{award.issuer} - {award.year}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{award.description}</p>
    </CardContent>
  </Card>
);

export default function AwardsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-12">
          <Award className="mx-auto h-16 w-16 text-accent mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">Awards &amp; Recognition</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and esteemed organizations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map(award => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </div>
  );
}
