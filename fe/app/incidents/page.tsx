"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

const mockIncidents = [
  { id: "INC-001", title: "Database Connection Timeout", dateCreated: "2025-01-15" },
  { id: "INC-002", title: "API Rate Limit Exceeded", dateCreated: "2025-01-14" },
  { id: "INC-003", title: "Authentication Service Down", dateCreated: "2025-01-14" },
  { id: "INC-004", title: "Memory Leak in Production", dateCreated: "2025-01-13" },
  { id: "INC-005", title: "SSL Certificate Expiring", dateCreated: "2025-01-13" },
  { id: "INC-006", title: "Disk Space Critical", dateCreated: "2025-01-12" },
  { id: "INC-007", title: "Load Balancer Failure", dateCreated: "2025-01-12" },
  { id: "INC-008", title: "Email Service Outage", dateCreated: "2025-01-11" },
  { id: "INC-009", title: "Payment Gateway Error", dateCreated: "2025-01-11" },
  { id: "INC-010", title: "CDN Performance Degradation", dateCreated: "2025-01-10" },
  { id: "INC-011", title: "Database Replication Lag", dateCreated: "2025-01-10" },
  { id: "INC-012", title: "Cache Server Unresponsive", dateCreated: "2025-01-09" },
  { id: "INC-013", title: "Network Latency Spike", dateCreated: "2025-01-09" },
  { id: "INC-014", title: "Backup Job Failed", dateCreated: "2025-01-08" },
  { id: "INC-015", title: "Security Scan Alert", dateCreated: "2025-01-08" },
  { id: "INC-016", title: "Container Orchestration Issue", dateCreated: "2025-01-07" },
  { id: "INC-017", title: "DNS Resolution Failure", dateCreated: "2025-01-07" },
  { id: "INC-018", title: "Queue Processing Delay", dateCreated: "2025-01-06" },
  { id: "INC-019", title: "Monitoring System Alert", dateCreated: "2025-01-06" },
  { id: "INC-020", title: "Third-Party API Timeout", dateCreated: "2025-01-05" },
]

export default function IncidentPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredIncidents = mockIncidents.filter(
    (incident) =>
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // useEffect(() => {
  //   const fetchIncidents = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4000/api/incidents/sample")
  //       if (!res.ok) throw new Error(`HTTP ${res.status}`)
  //       const data = await res.json()
  //     } catch (err: any) {
  //       console.error(err)
  //     }
  //   }
  //   fetchIncidents()
  // }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="fixed top-4 right-4 z-30">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="pl-20 pr-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Incidents</h1>

        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search incidents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-card border-2 border-border focus:border-primary transition-all duration-300 shadow-md"
          />
        </div>

        <Card className="border-2 shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Title</th>
                    <th className="text-left p-4 font-semibold text-foreground">Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIncidents.map((incident, index) => (
                    <tr
                      key={incident.id}
                      className={`border-b border-border/50 hover:bg-accent/10 transition-colors ${
                        index % 2 === 0 ? "bg-card" : "bg-muted/20"
                      }`}
                    >
                      <td className="p-4">
                        <Link
                          href={`/incidents/${incident.id}`}
                          className="text-primary hover:text-accent font-medium transition-colors hover:underline"
                        >
                          {incident.id} - {incident.title}
                        </Link>
                      </td>
                      <td className="p-4 text-muted-foreground">{incident.dateCreated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
