"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const navigationLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Contact", href: "/#contact" },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width: 100, height: 100 }} />
  }

  const logoSrc = resolvedTheme === "dark" ? "/logo.svg" : "/logo-white.svg"

  return (
    <div className="sticky top-0 z-10 backdrop-blur-sm">
      <header className="flex flex-row items-center justify-between px-[46px] sm:mx-[5vw] h-12">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src={logoSrc} alt="Logo" width={120} height={100} />
        </Link>
        <nav className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-4 text-sm">
          {navigationLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
          </div>
          <Separator orientation="vertical" className="h-[40px]" />
          <ModeToggle />
        </nav>
      </header>
      <Separator orientation="horizontal" />
    </div>
  )
}