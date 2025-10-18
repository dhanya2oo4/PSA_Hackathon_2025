"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

type Incident = {
  id: string
  description: string
  analysis?: Record<string, any>
  createdAt?: string
}

export default function IncidentPage() {
  const [items, setItems] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        setLoading(true)
        const res = await fetch("http://localhost:4000/api/incidents/sample")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (err: any) {
        setError(err.message || String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchIncidents()
  }, [])

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
      <div className="pl-20 pr-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Incidents</h1>

        {loading && <p className="text-muted-foreground">Loading...</p>}
        {error && <p className="text-destructive">Error: {error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {items.map((it) => (
              <Link key={it.id} href={`/incidents/${it.id}`}>
                <Card className="hover:bg-accent transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle>
                      #{it.id} - {it.analysis?.severity ?? "n/a"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{it.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{it.createdAt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
