"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock PDF data
const mockPDFs = [
  { id: 1, title: "Network Security Best Practices", url: "/pdfs/network-security.pdf" },
  { id: 2, title: "Incident Response Procedures", url: "/pdfs/incident-response.pdf" },
  { id: 3, title: "Database Backup Guidelines", url: "/pdfs/database-backup.pdf" },
]

export default function IncidentDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="fixed top-4 right-4 z-30">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="pl-20 pr-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Incident #{params.id}</h1>

        <div className="space-y-4">
          {/* Small Card at Top */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-md">
            <CardHeader>
              <CardTitle className="text-primary">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a placeholder text for the incident summary. Details about the incident will be displayed here.
              </p>
            </CardContent>
          </Card>

          {/* Large Card at Bottom */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-md">
            <CardHeader>
              <CardTitle className="text-primary">Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[400px]">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a placeholder text for the detailed analysis of the incident. More comprehensive information,
                logs, and analysis results will be displayed in this section. This card is larger to accommodate more
                detailed content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-md">
            <CardHeader>
              <CardTitle className="text-primary">Knowledge Base Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockPDFs.map((pdf) => (
                  <div
                    key={pdf.id}
                    className="flex items-center justify-between gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{pdf.title}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedPDF(pdf.url)}
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      View
                    </Button>
                  </div>
                ))}
              </div>

              {/* PDF Viewer */}
              {selectedPDF && (
                <div className="mt-4 border-2 border-primary/20 rounded-lg overflow-hidden">
                  <div className="bg-muted/50 p-2 flex justify-between items-center">
                    <span className="text-sm font-medium">PDF Viewer</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setSelectedPDF(null)}
                      className="hover:bg-destructive/10 hover:text-destructive"
                    >
                      Close
                    </Button>
                  </div>
                  <iframe src={selectedPDF} className="w-full h-[500px]" title="PDF Viewer" />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-md">
            <CardHeader>
              <CardTitle className="text-primary">Escalation Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium text-foreground">Mark Lee – Product Ops Manager</p>
                  <p className="text-xs text-muted-foreground">Email: mark.lee@psa123.com</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Container (CNTR) - Oversee Container-related issues
                  </p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium text-foreground">Tom Tan – EDI/API Support</p>
                  <p className="text-xs text-muted-foreground">Email: tom.tan@psa123.com</p>
                  <p className="text-xs text-muted-foreground mt-1">EDI/API (EA) - Handle EDI/API issues</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium text-foreground">Jacky Chan – Infra/SRE Support Lead</p>
                  <p className="text-xs text-muted-foreground">Email: jacky.chan@psa123.com</p>
                  <p className="text-xs text-muted-foreground mt-1">System infrastructure issues</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
