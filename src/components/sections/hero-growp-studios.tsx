import Link from "next/link";

export default function HeroGrowpStudios() {
  return (
    <div className="w-full mt-[100px] h-[calc(60vh)] border rounded-lg overflow-hidden relative">
      <iframe
        src="https://growplang.vercel.app/"
        title="Growp Lang"
        className="w-full h-full border-none"
      />
      <Link
        href="https://growplang.vercel.app/"
        target="_blank"
        className="absolute inset-0 z-10"
      />
    </div>
  );
}