"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ProjectCarousel(
    { projects, className }: { projects: { title: string, description: string, link: string }[], className?: string }
) {
    const DURATION = 250;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const [busy, setBusy] = useState(false);

    function rotate(change: number) {
        if (busy) return;
        setBusy(true);
        
        setAnimationKey((key) => key + 1);
        setTimeout(() => {
            setCurrentIndex((currentIndex + change + projects.length) % projects.length);
        }, DURATION / 2);
        setTimeout(() => setBusy(false), DURATION);
    }

    return (
        <div className={cn("flex items-center justify-center perspective-distant", className)}>
            <div className="w-1/6 h-full flex items-center justify-center">
                <Button className="w-1/12 h-16 bg-gray-800 opacity-50" 
                    onClick={() => rotate(-1)}>
                    <b>&lt;</b>
                </Button>
            </div>
            <div key={animationKey} className="h-full w-full animate-flip-next">
                <ProjectCard {...projects[currentIndex]} className="h-full w-full" />
            </div>
            <div className="w-1/6 h-full flex items-center justify-center">
                <Button className="w-1/12 h-16 bg-gray-800 opacity-50" 
                    onClick={() => rotate(1)}>
                    <b>&gt;</b>
                </Button>
            </div>
        </div>
    )
}