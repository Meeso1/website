import AboutMeCard from "@/components/about-me-card";
import Background from "@/components/background";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen h-screen flex-1 items-center justify-center font-sans">
      <Background />
      <div className="flex w-full h-full">
        <div className="flex w-1/2 h-full items-center justify-center">
          <AboutMeCard className="w-3/4 h-[75vh] bg-gray-800" />
        </div>
        <div className="flex w-1/2 h-full items-center justify-center">
          <ProjectCard 
            title="Project 1" 
            description="Project 1 description" 
            link="https://www.google.com" 
            className="w-1/2 h-[50vh] bg-gray-800" 
          />
        </div>
      </div>
    </div>
  );
}
