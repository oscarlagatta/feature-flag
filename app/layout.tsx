import type React from "react"
import { FeatureFlagProvider } from "@/lib/feature-flags/context"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
    title: "Feature Flags Demo",
    description: "A demonstration of feature flags in Next.js",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <FeatureFlagProvider>
                <div className="relative flex min-h-screen flex-col">
                    <Header/>
                    <main className="flex-1 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full py-10">{children}</main>
                </div>
            </FeatureFlagProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}

