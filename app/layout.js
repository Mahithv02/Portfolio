import { Space_Mono, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Mahith V — Software Developer',
  description: 'Portfolio of Mahith V, Software Development Engineer specializing in React, Next.js, and scalable web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
