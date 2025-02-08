import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Eddy Engine",
  description: "Eddy Engine is a powerful search platform combining AI-driven search with social media exploration. Find relevant content across multiple platforms efficiently.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'
