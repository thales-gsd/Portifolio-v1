"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import BoxProject from "./box-project"

const projects = [
  { id: 1, content: "Growp Studios", repoName: "GrowpStudios-APP-Versions", linkDemo: "https://growp-studios.vercel.app/", linkRepo: "https://github.com/thales-gsd/GrowpStudios-APP-Versions", image: "/growp-studios-img.png" },
  { id: 2, content: "Blog preview Card", repoName: "blog-preview-card-project", linkDemo: "https://thales-gsd.github.io/blog-preview-card-project/", linkRepo: "https://github.com/thales-gsd/blog-preview-card-project", image: "/blog-preview-card-project-img.png" },
  { id: 3, content: "Social links profile", repoName: "social-links-profile ", linkDemo: "https://social-links-profile-ten-blush.vercel.app/", linkRepo: "https://github.com/thales-gsd/social-links-profile", image: "/social-links-profile-img.png" },
  { id: 4, content: "Interactive rating", repoName: "interactive-rating-component", linkDemo: "https://interactive-rating-component-three-delta.vercel.app/", linkRepo: "https://github.com/thales-gsd/interactive-rating-component", image: "/interactive-rating-component-img.png" },
  { id: 5, content: "Base apparel coming soon", repoName: "base-apparel-coming-soon", linkDemo: "https://base-apparel-coming-soon-eight-gilt.vercel.app/", linkRepo: "https://github.com/thales-gsd/base-apparel-coming-soon", image: "/base-apparel-coming-soon-img.png" },
]

export default function ScrollWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={containerRef} className="relative h-[1400px]">
      <div className="sticky top-0 left-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">My Works</h1>
          <p className="text-base md:text-lg leading-relaxed">Here are some of my recent projects.</p>
        </div>
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((project) => (
            <BoxProject key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}