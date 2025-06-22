"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { ProjectModal, type Project } from '@/components/ProjectModal';

const ongoingProjects: Project[] = [
  {
    id: 'p1',
    title: "Project Phoenix",
    category: "Web Application",
    description: "A comprehensive enterprise resource planning (ERP) system designed to streamline operations for a major logistics company. Features include real-time tracking, inventory management, and automated reporting.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "logistics dashboard",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    status: "Ongoing",
  },
  {
    id: 'p2',
    title: "InnovateApp",
    category: "Mobile App",
    description: "A cross-platform mobile application for a fintech startup, enabling users to manage investments and track market trends with a highly intuitive interface.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "fintech app",
    technologies: ["React Native", "Firebase", "Chart.js"],
    status: "Ongoing",
  }
];

const completedProjects: Project[] = [
  {
    id: 'c1',
    title: "E-Shopify Redesign",
    category: "E-commerce",
    description: "A full redesign and migration of a popular online fashion retailer to a modern, headless e-commerce architecture. The project resulted in a 40% increase in conversion rates.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "fashion website",
    technologies: ["Shopify Plus", "Next.js", "GraphQL"],
    status: "Completed",
  },
  {
    id: 'c2',
    title: "HealthWell Platform",
    category: "Healthcare",
    description: "A secure patient portal for a regional hospital network, allowing patients to book appointments, view medical records, and communicate with healthcare providers.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "healthcare portal",
    technologies: ["Vue.js", ".NET Core", "Azure"],
    status: "Completed",
  },
  {
    id: 'c3',
    title: "Artisan's Marketplace",
    category: "Web Platform",
    description: "An online marketplace connecting artisans with buyers worldwide. Features included multi-vendor support, secure payments, and a custom review system.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "online marketplace",
    technologies: ["Laravel", "MySQL", "Stripe Connect"],
    status: "Completed",
  }
];

const ProjectCard = ({ project, onViewDetails }: { project: Project, onViewDetails: (project: Project) => void }) => (
  <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={project.imageUrl}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        data-ai-hint={project.dataAiHint}
        className="transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <Badge variant="secondary" className="w-fit">{project.category}</Badge>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground line-clamp-3">{project.description}</p>
    </CardContent>
    <CardFooter>
      <Button onClick={() => onViewDetails(project)} className="w-full">View Details</Button>
    </CardFooter>
  </Card>
);

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">Our Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our dedication, skill, and the successful partnerships we've built.
            </p>
          </header>

          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="ongoing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ongoingProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={handleCloseModal} />
    </>
  );
}
