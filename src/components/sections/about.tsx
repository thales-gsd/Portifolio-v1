"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AboutBlock from "./about-block";
import { Skeleton } from "../ui/skeleton";

const aboutBlocks = [
  {
    title: "Knowledge in APIs",
    description: ["NestJs", "Java", "NodeJS", "Express"],
    element: "section",
    fileName: "apis.tsx",
  },
  {
    title: "Main Stack",
    description: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js"],
    element: "div",
    fileName: "stack.tsx",
  },
  {
    title: "Databases",
    description: ["PostgreSQL", "GraphQL", "MySQL", "SQLite"],
    element: "ul",
    fileName: "databases.tsx",
  },
];

export default function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imgSrc = resolvedTheme === "dark" ? "/next-white.svg" : "/next-black.svg";

  return (
    <div id="about" className="w-full pt-12 md:pt-20 flex flex-col items-start justify-start gap-8">
      <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-8">
        <p className="text-base md:text-lg w-full md:w-1/2 leading-relaxed">
          I'm a front-end developer specializing in websites.<br />
          I've been studying since I was 15, and while I enjoy creating and managing APIs,
          I've always preferred building web pages with different styles and customizations.<br />
          With over 2 years of experience in the market, I've learned that the most important
          thing is not to be afraid to take risks.
        </p>

        <div className="hidden md:flex md:w-1/2 items-center justify-end self-stretch">
          <div className="relative w-full h-full max-w-[300px]">
            {mounted ? (
              <img 
                src={imgSrc} 
                alt="About me" 
                className="absolute inset-0 w-full h-full object-contain" 
              />
            ) : (
              <Skeleton className="w-full h-full rounded-xl" />
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
        {aboutBlocks.map((block, index) => (
          <AboutBlock
            key={index}
            title={block.title}
            description={block.description}
            element={block.element}
            fileName={block.fileName}
          />
        ))}
      </div>
    </div>
  );
}