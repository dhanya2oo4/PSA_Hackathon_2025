"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    router.push("/homepage")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-blue-950 dark:via-sky-950 dark:to-indigo-950">
      <div className="flex flex-col items-center gap-8 w-full max-w-md px-4">
        {/* Placeholder Logo */}
        <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg border-2 border-primary/20">
          <span className="text-primary font-semibold text-sm">Logo</span>
        </div>

        <div className="w-full space-y-4 min-h-[120px] flex flex-col justify-start">
          {/* Email Input with thicker borders */}
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-white dark:bg-gray-800 border-2 border-primary/30 focus:border-primary transition-all duration-300 shadow-md"
          />

          {email && (
            <Button
              onClick={handleLogin}
              className="w-full h-12 bg-primary hover:bg-accent text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
