import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar2 from '@/components/Navbar2'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'this is a home page for log in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

