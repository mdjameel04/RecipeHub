import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Header from "./components/Header"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "Served – AI Recipes Platform",
  description:
    "Served is an AI recipes platform that helps users find and create delicious recipes easily.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ClerkProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="py-8 px-4 border-t">
            <p className="max-w-6xl mx-auto flex justify-center">
              Made with 💗 by Jameel
            </p>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  )
}