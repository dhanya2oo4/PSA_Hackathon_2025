"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function HomePage() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="fixed top-4 right-4 z-30">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-3xl space-y-8">
          {/* Welcome Message */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Welcome to PSA Assistant</h1>
            <p className="text-muted-foreground text-lg">How can I help you today?</p>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center gap-4 py-12">
              <LoadingSpinner />
              <p className="text-muted-foreground">Processing your request...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Text Input with modern styling */}
              <Textarea
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[150px] resize-none border-2 border-border focus:border-primary transition-all duration-300 bg-card"
              />
              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-primary hover:bg-accent text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
