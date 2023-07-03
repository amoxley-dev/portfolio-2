import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './nav-bar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Moxley Portfolio',
  description: 'Portfolio of Alex Moxley, a software engineer based in Sunnyvale, CA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
