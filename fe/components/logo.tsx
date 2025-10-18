"use client"

import Link from "next/link"

export function Logo() {
  return (
    <Link href="/homepage">
      <div className="w-12 h-12 bg-card border-2 border-primary/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-all duration-300 hover:scale-105">
        <span className="text-primary font-semibold text-xs">Logo</span>
      </div>
    </Link>
  )
}
