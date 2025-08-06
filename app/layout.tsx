import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eddy Engine - Advanced AI and Social Media Search",
  description:
    "Eddy Engine is a powerful search platform combining AI-driven search with social media exploration. Find relevant content across multiple platforms efficiently.",
  keywords:
    "AI search, social media search, Eddy Engine, content discovery, Monica, MemFree, 秘塔, 小红书, 微信, Bilibili, 抖音",
    generator: 'v0.dev'
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
