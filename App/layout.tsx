// File: app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import * as entry from '../App/layout.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caetano Hidráulica',
  description: 'Serviços de hidráulica profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}