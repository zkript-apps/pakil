import Header from '@/components/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


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
        <Header/>
        {children}
        </body>
    </html>
  )
}