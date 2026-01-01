"use client"

import type React from "react"
import { useRef } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "@/app/lib/query-client"
import { AuthProvider } from "@/app/contexts/auth-context"
import { AttendanceProvider } from "@/app/contexts/attendance-context"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef(getQueryClient())

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AuthProvider>
        <AttendanceProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </AttendanceProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
