"use client"

import { AlertTriangle, Phone, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-primary/80 border-b border-destructive/30 shadow-lg">
      <div className="px-4 md:px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive/20 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">Smart City Emergency</h1>
              <p className="text-sm text-primary-foreground/80">Real-time Crisis Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Phone className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-primary-foreground/20 text-sm text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Active Incidents: 12
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Critical: 3
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Ambulances Deployed: 8
          </div>
        </div>
      </div>
    </header>
  )
}
