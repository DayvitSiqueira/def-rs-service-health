import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
