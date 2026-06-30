"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ProjectCarousel(
    { projects, className }: { projects: { title: string, description: string, link: string }[], className?: string }
) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={cn("flex items-center justify-center", className)}>
            <div className="w-1/6 h-full flex items-center justify-center">
                <Button className="w-1/12 h-16 bg-gray-800 opacity-50" 
                    onClick={() => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)}>
                    <b>&lt;</b>
                </Button>
            </div>
            <ProjectCard 
                title={projects[currentIndex].title} 
                description={projects[currentIndex].description} 
                link={projects[currentIndex].link} 
                className="h-full w-full"
            />
            <div className="w-1/6 h-full flex items-center justify-center">
                <Button className="w-1/12 h-16 bg-gray-800 opacity-50" 
                    onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}>
                    <b>&gt;</b>
                </Button>
            </div>
        </div>
    )
}