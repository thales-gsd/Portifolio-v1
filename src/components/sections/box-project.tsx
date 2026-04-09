import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  project: {
    id: number;
    content: string;
    repoName: string;
    linkDemo: string;
    linkRepo: string;
    image: string;
  };
}

export default function BoxProject({ project }: ProjectProps) {
  return (
    <div
      className="group border pb-4 flex flex-col"
    >
      <div className="relative w-full h-72">
        <Image 
          src={project.image} 
          alt={project.content} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{project.content}</h1>
        <div className="flex gap-2 mt-4">
          <Link href={project.linkDemo} target="_blank" rel="noopener noreferrer">
            <Button variant="default">
              View demo
            </Button>
          </Link>
          <Link href={project.linkRepo} target="_blank" rel="noopener noreferrer">
            <Button variant="link">
              github.com/thales-gsd/{project.repoName}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}