import Link from "next/link";

export default function HeroHome() {
  return (
    <div id="home" className="flex px-[46px] flex-col items-start justify-end w-full h-[calc(50vh-24px)]">
      <h1 className="text-4xl font-semibold mb-4 text-6xl">Thales Dipa</h1>
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-sm text-muted-foreground">Web Developer</p>
        <Link
          href="https://github.com/thales-gsd"
          target="_blank"
          className="group flex flex-row items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span>Available to work</span>
          <span className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors duration-200">
            github.com/thales-gsd →
          </span>
        </Link>
      </div>
    </div>
  );
}