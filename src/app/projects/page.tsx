
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { ProjectModal, type Project } from '@/components/ProjectModal';
import { AppBar } from '@/components/AppBar';
import { MapPin } from 'lucide-react';

const ongoingProjects: Project[] = [
  {
    id: 'p1',
    title: "Jebel Ali Power Plant",
    location: "Dubai, UAE",
    description: "Full-scope mechanical and electrical installation for a new 500MW power plant, including turbine erection, piping, and high-voltage cabling.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "power plant exterior",
    siteImages: [
        { src: "https://placehold.co/600x400.png", dataAiHint: "site progress" },
        { src: "https://placehold.co/600x400.png", dataAiHint: "construction site" },
        { src: "https://placehold.co/600x400.png", dataAiHint: "electrical wiring" },
    ],
    clientName: "Dubai Electricity & Water Authority",
    year: 2024,
    status: "Ongoing",
  },
  {
    id: 'p2',
    title: "RAK Cement Factory Upgrade",
    location: "Ras Al Khaimah, UAE",
    description: "Upgrading the clinker cooler system and installing a new waste heat recovery power plant to improve efficiency and sustainability.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "cement factory",
    siteImages: [
        { src: "https://placehold.co/600x400.png", dataAiHint: "industrial machinery" },
        { src: "https://placehold.co/600x400.png", dataAiHint: "factory interior" },
    ],
    clientName: "RAK Cement Co.",
    year: 2024,
    status: "Ongoing",
  }
];

const completedProjects: Project[] = [
  {
    id: 'c1',
    title: "Sharjah Industrial Area Substation",
    location: "Sharjah, UAE",
    description: "Completed the testing and commissioning of a 132/33kV substation, ensuring full compliance with national grid standards.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "electrical substation",
     siteImages: [
        { src: "https://placehold.co/600x400.png", dataAiHint: "control panel" },
        { src: "https://placehold.co/600x400.png", dataAiHint: "power lines" },
    ],
    clientName: "Sharjah Electricity & Water Authority",
    year: 2023,
    status: "Completed",
  },
  {
    id: 'c2',
    title: "Abu Dhabi Steel Mill Maintenance",
    location: "Abu Dhabi, UAE",
    description: "Annual maintenance contract for the electrical and mechanical systems of a major steel production facility, minimizing downtime.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "steel mill",
     siteImages: [
        { src: "https://placehold.co/600x400.png", dataAiHint: "molten steel" },
        { src: "https://placehold.co/600x400.png", dataAiHint: "heavy equipment" },
    ],
    clientName: "Emirates Steel",
    year: 2022,
    status: "Completed",
  },
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
      <Badge variant="secondary" className="w-fit inline-flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        {project.location}
      </Badge>
    </CardHeader>
    <CardFooter className="mt-auto">
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
      <AppBar title="Our Projects" />
      <div className="bg-background">
        <div className="max-w-sm mx-auto p-4">
          <p className="text-center text-muted-foreground mb-8">
              A showcase of our dedication, skill, and the successful partnerships we've built.
          </p>

          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="ongoing" className="mt-8">
              <div className="grid grid-cols-1 gap-6">
                {ongoingProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-8">
              <div className="grid grid-cols-1 gap-6">
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
