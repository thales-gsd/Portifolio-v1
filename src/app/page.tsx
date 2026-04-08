import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import HeroGrowpStudios from "@/components/sections/hero-growp-studios";
import HeroHome from "@/components/sections/hero-home";
import Works from "@/components/sections/works";

export default function Home() {
  return (
    <div id="home" className="flex flex-col m-0 sm:mx-[10vw] items-center justify-center">
      <HeroHome />
      <HeroGrowpStudios />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
