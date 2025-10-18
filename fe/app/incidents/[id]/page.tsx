"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IncidentDetailPage({
  params,
}: {
  params: { id: string }
}) {
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
        <h1 className="text-3xl font-bold mb-6 text-foreground">Incident #{params.id}</h1>

        <div className="space-y-4">
          {/* Small Card at Top */}
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a placeholder text for the incident summary. Details about the incident will be displayed here.
              </p>
            </CardContent>
          </Card>

          {/* Large Card at Bottom */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[400px]">
              <p className="text-sm text-muted-foreground">
                This is a placeholder text for the detailed analysis of the incident. More comprehensive information,
                logs, and analysis results will be displayed in this section. This card is larger to accommodate more
                detailed content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
