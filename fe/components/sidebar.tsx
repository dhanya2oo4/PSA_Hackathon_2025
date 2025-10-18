"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, Moon, Sun, LogOut, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const router = useRouter()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const handleSignOut = () => {
    router.push("/")
  }

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="ghost" size="icon" onMouseEnter={() => setIsExpanded(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40 ${
          isExpanded ? "w-64" : "w-0"
        } overflow-hidden`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col h-full p-4 pt-20">
          <nav className="flex-1 space-y-2">
            <Link href="/incidents">
              <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                <AlertCircle className="mr-2 h-4 w-4" />
                Incidents
              </Button>
            </Link>

            <Link href="/kb">
              <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                <FileText className="mr-2 h-4 w-4" />
                KB
              </Button>
            </Link>
          </nav>

          <div className="space-y-2 border-t border-sidebar-border pt-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={toggleTheme}
            >
              {isDark ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
                </>
              )}
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
