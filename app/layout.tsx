import "./globals.css"
import type { ReactNode } from "react"
import { ThemeProvider } from "./providers"
import localFont from "next/font/local"


const fontHeading = localFont({
  src: "../public/fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-heading",
  display: "swap",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${fontHeading.variable}`}
    >
      {/* además de font-sans, le pongo la className de la body font como respaldo */}
      <body className={`font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
