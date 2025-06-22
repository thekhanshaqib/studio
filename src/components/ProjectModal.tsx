"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from './ui/separator';
import { Tag } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  technologies: string[];
  status: "Ongoing" | "Completed";
};

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <div className="relative h-64 w-full rounded-t-lg overflow-hidden mb-4 -mt-6 -mx-6">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={project.dataAiHint}
            />
          </div>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
           <div className="flex items-center gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant={project.status === 'Completed' ? 'default' : 'outline'} className={project.status === 'Completed' ? 'bg-green-600 text-white' : 'border-amber-500 text-amber-500'}>
              {project.status}
            </Badge>
          </div>
          <Separator className="my-2" />
          <DialogDescription className="text-base text-muted-foreground pt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h3 className="text-lg font-semibold flex items-center mb-3">
            <Tag className="mr-2 h-5 w-5 text-primary" />
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
