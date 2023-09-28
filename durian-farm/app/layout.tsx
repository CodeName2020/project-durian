'use client'
import './globals.css'
import localFont from 'next/font/local'
import { BrowserRouter } from 'react-router-dom'
import App from './page'
import Navbar from '@/components/Navbar'

const myFont = localFont({
  src: './font/Quark-Bold.otf',
  display: 'swap',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="bg-white" suppressHydrationWarning={true}>
        <BrowserRouter>
          <Navbar />
          <App />
        </BrowserRouter>
      </body>
    </html>
  )
}

