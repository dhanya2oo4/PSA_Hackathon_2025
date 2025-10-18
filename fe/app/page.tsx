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
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8 w-full max-w-md px-4">
        {/* Placeholder Logo */}
        <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Logo</span>
        </div>

        {/* Email Input */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />

        {/* Login Button - appears when typing */}
        {email && (
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        )}
      </div>
    </div>
  )
}
