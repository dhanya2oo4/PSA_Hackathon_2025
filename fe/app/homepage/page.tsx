"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    // Does nothing for now
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Logo at top right */}
      <div className="fixed top-4 right-4">
        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground text-xs">Logo</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-3xl space-y-8">
          {/* Welcome Message */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Welcome to PSA Assistant</h1>
            <p className="text-muted-foreground text-lg">How can I help you today?</p>
          </div>

          {/* Text Input */}
          <div className="space-y-4">
            <Textarea
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[150px] resize-none"
            />
            <Button onClick={handleSubmit} className="w-full">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
