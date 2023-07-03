import './globals.css'
import NavBar from './nav-bar/page'

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
      <body className="h-screen bg-gradient-to-t from-purple-700 via-fuchsia-900 to-slate-900" >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
