"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps extends React.PropsWithChildren {
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  enableColorScheme?: boolean
  disableTransitionOnChange?: boolean
  enableCSSSelector?: boolean
  storageKey?: string
  themes?: string[]
  forcedTheme?: string
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
