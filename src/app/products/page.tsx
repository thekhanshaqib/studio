import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { AppBar } from '@/components/AppBar';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  price: string;
};

const products: Product[] = [
  { id: 'prod1', name: "Megapower CRM Suite", category: "Software", description: "A powerful, all-in-one CRM to manage customer relationships, sales pipelines, and marketing campaigns.", imageUrl: "https://placehold.co/400x400.png", dataAiHint: "software dashboard", price: "$49/mo" },
  { id: 'prod2', name: "Quantum Analytics", category: "Software", description: "Advanced analytics platform that provides deep insights into your business data with predictive modeling.", imageUrl: "https://placehold.co/400x400.png", dataAiHint: "data analytics", price: "$99/mo" },
  { id: 'prod3', name: "ConnectAPI", category: "Developer Tools", description: "A robust set of APIs to seamlessly integrate your applications with third-party services.", imageUrl: "https://placehold.co/400x400.png", dataAiHint: "API code", price: "Usage-based" },
  { id: 'prod4', name: "SecureVault", category: "Security", description: "Enterprise-grade security solution for data protection, threat detection, and compliance management.", imageUrl: "https://placehold.co/400x400.png", dataAiHint: "cyber security", price: "$129/mo" },
  { id: 'prod5', name: "FlowBuilder", category: "Developer Tools", description: "A visual workflow automation tool that empowers developers to build complex integrations with ease.", imageUrl: "https://placehold.co/400x400.png", dataAiHint: "workflow diagram", price: "$79/mo" },
  { id: 'prod6', name: "Insight CMS", category: "Software", description: "A headless content management system designed for flexibility and performance.", imageUrl: "https://placehold.co/400x400.png", dataAiHint: "CMS interface", price: "$39/mo" },
];

const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
    <div className="relative aspect-square w-full overflow-hidden">
      <Image
        src={product.imageUrl}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        data-ai-hint={product.dataAiHint}
        className="transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <CardHeader>
      <CardTitle>{product.name}</CardTitle>
      <Badge variant="secondary" className="w-fit">{product.category}</Badge>
    </CardHeader>
    <CardContent className="flex-grow space-y-4">
      <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
      <p className="text-xl font-bold text-primary">{product.price}</p>
    </CardContent>
    <div className="p-4 pt-0">
        <Button className="w-full">Learn More</Button>
    </div>
  </Card>
);

const ProductGrid = ({ category }: { category: string }) => {
    const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
    return (
        <div className="grid grid-cols-1 gap-6">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default function ProductsPage() {
  return (
    <>
      <AppBar title="Our Products" />
      <div className="bg-background">
        <div className="max-w-sm mx-auto p-4">
          <p className="text-center text-muted-foreground mb-8">
            Innovative solutions engineered to solve today's challenges and unlock tomorrow's opportunities.
          </p>

          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category} value={category}>
                  <ProductGrid category={category} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}
