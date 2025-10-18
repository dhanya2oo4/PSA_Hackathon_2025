"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock escalation contacts data
const escalationData = [
  {
    module: "Container (CNTR)",
    contact: "Mark Lee – Product Ops Manager",
    email: "mark.lee@psa123.com",
    role: "Oversee Container-related issues",
    steps:
      "1. Notify Product Duty immediately. 2. If unresolved, escalate to Manager on-call. 3. Engage SRE/Infra team if needed.",
  },
  {
    module: "Vessel (VS)",
    contact: "Jaden Smith – Vessel Operations",
    email: "jaden.smith@psa123.com",
    role: "Vessel management and troubleshooting",
    steps:
      "1. Notify Vessel Duty team. 2. If no response, escalate to Senior Ops Manager. 3. Engage Vessel Static team for further diagnostics.",
  },
  {
    module: "EDI/API (EA)",
    contact: "Tom Tan – EDI/API Support",
    email: "tom.tan@psa123.com",
    role: "Handle EDI/API issues (message validation, communication errors)",
    steps:
      "1. Contact EDI/API team via on-call channel. 2. In case of API failures, escalate to Infra/SRE. 3. Engage partner if issue persists.",
  },
  {
    module: "Infrastructure",
    contact: "Jacky Chan – Infra/SRE support Lead",
    email: "jacky.chan@psa123.com",
    role: "System infrastructure issues (e.g., latency, network)",
    steps:
      "1. If system error detected, immediately engage Infra team. 2. Escalate to Jacky Chan (SRE) for urgent cases.",
  },
  {
    module: "General Support",
    contact: "PSA Helpdesk",
    email: "support@psa123.com",
    role: "General helpdesk for inquiries and non-technical issues",
    steps: "1. For non-urgent queries, escalate to team lead. 2. For emergency issues, direct to on-call ops.",
  },
]

export default function EscalationContactsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContacts = escalationData.filter(
    (contact) =>
      contact.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="fixed top-4 right-4 z-30">
        <Logo />
      </div>

      <div className="pl-20 pr-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Escalation Contacts</h1>

        {/* Modern Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search contacts, modules, or roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-card border-2 border-border focus:border-primary transition-all duration-300 shadow-md"
          />
        </div>

        {/* Modern Table */}
        <div className="bg-card rounded-lg border-2 border-border shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b-2 border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Module</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Escalation Steps</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{contact.module}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{contact.contact}</td>
                    <td className="px-6 py-4 text-sm text-primary hover:underline">
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{contact.role}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{contact.steps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No contacts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
