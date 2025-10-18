"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, FileText } from "lucide-react"

const mockPDFs = [
  {
    id: "1",
    title: "Network Security Best Practices",
    filename: "network-security.pdf",
    tags: ["security", "network"],
    url: "/pdfs/network-security.pdf",
  },
  {
    id: "2",
    title: "Incident Response Procedures",
    filename: "incident-response.pdf",
    tags: ["incident", "procedures"],
    url: "/pdfs/incident-response.pdf",
  },
  {
    id: "3",
    title: "Database Backup Guidelines",
    filename: "database-backup.pdf",
    tags: ["database", "backup"],
    url: "/pdfs/database-backup.pdf",
  },
  {
    id: "4",
    title: "Cloud Infrastructure Setup",
    filename: "cloud-setup.pdf",
    tags: ["cloud", "infrastructure"],
    url: "/pdfs/cloud-setup.pdf",
  },
  {
    id: "5",
    title: "API Security Standards",
    filename: "api-security.pdf",
    tags: ["api", "security"],
    url: "/pdfs/api-security.pdf",
  },
  {
    id: "6",
    title: "User Authentication Guide",
    filename: "auth-guide.pdf",
    tags: ["authentication", "security"],
    url: "/pdfs/auth-guide.pdf",
  },
]

export default function KBPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  const filteredPDFs = mockPDFs.filter(
    (pdf) =>
      pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // useEffect(() => {
  //   const fetchKB = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4000/api/kb/sample")
  //       if (!res.ok) throw new Error(`HTTP ${res.status}`)
  //       const data = await res.json()
  //     } catch (err: any) {
  //       console.error(err)
  //     }
  //   }
  //   fetchKB()
  // }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="fixed top-4 right-4 z-30">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="pl-20 pr-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Knowledge Base</h1>

        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search knowledge base..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-card border-2 border-border focus:border-primary transition-all duration-300 shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPDFs.map((pdf) => (
            <Card
              key={pdf.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50"
              onClick={() => setSelectedPDF(pdf.url)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-primary" />
                  {pdf.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{pdf.filename}</p>
                <div className="flex flex-wrap gap-2">
                  {pdf.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPDF && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-4xl h-[80vh] flex flex-col border-2">
              <CardHeader className="flex flex-row items-center justify-between border-b-2 border-border">
                <CardTitle>{mockPDFs.find((p) => p.url === selectedPDF)?.title}</CardTitle>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedPDF(null)}
                  className="hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                >
                  Close
                </Button>
              </CardHeader>
              <CardContent className="flex-1 p-0 overflow-hidden">
                <iframe src={selectedPDF} className="w-full h-full" title="PDF Viewer" />
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
