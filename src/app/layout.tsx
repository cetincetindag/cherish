import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '~/styles/globals.css'
import TopBar from '~/components/ui/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cherish',
  description: 'Connect, celebrate, and cherish moments with your loved ones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}


