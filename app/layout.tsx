import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Department from '@/components/pages/home/Department'
import Services from '@/components/pages/home/Services'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pakil - Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href={`/pakil-logo.png`} />
      <body className={inter.className}>
        <Services/>
        <Department/>
        {children}
        </body>
    </html>
  )
}
