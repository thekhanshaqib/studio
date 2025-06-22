
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from './ui/separator';
import { Building, CalendarDays } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  siteImages: { src: string; dataAiHint: string }[];
  clientName: string;
  year: number;
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
      <DialogContent className="max-w-sm p-0">
        <div className="max-h-[90svh] overflow-y-auto">
            <DialogHeader className="p-6 pb-4 text-left">
                <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                <DialogDescription>{project.location}</DialogDescription>
            </DialogHeader>

            <div className='px-6'>
                <Carousel className="w-full mb-4" opts={{ loop: true }}>
                    <CarouselContent>
                    {project.siteImages.map((image, index) => (
                        <CarouselItem key={index}>
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                            <Image
                            src={image.src}
                            alt={`${project.title} site image ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint={image.dataAiHint}
                            />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>


            <div className="px-6 pb-6 space-y-4">
                <div>
                <h3 className="font-semibold mb-1 text-primary">Description</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <Separator />
                <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                        <p className="font-semibold">Client</p>
                        <p className="text-muted-foreground">{project.clientName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                        <p className="font-semibold">Year</p>
                        <p className="text-muted-foreground">{project.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
