"use client";

import AboutMeCard from "@/components/about-me-card";
import Background from "@/components/background";
import ProjectCarousel from "@/components/project-carousel";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen h-screen flex-1 items-center justify-center font-sans">
      <Background />
      <div className="flex w-full h-full">
        <div className="flex w-1/2 h-full items-center justify-center">
          <AboutMeCard className="w-4/5 h-[80vh] bg-gray-800" />
        </div>
        <div className="flex w-1/2 h-full items-center justify-center">
          <ProjectCarousel projects={[
            { title: "No projects yet...", description: "This is just a placeholder for now.", link: "https://www.google.com" },
            { title: "Still no projects...", description: "This is also a placeholder.", link: "https://www.google.com" },
          ]} className="w-2/3 h-[50vh]" />
        </div>
      </div>
    </div>
  );
}
