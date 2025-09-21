import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-accent',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Pravilo.Club - Древняя Славянская Мудрость для Здоровья',
  description: 'Традиционный русский метод декомпрессии позвоночника в тропическом раю. Древняя славянская мудрость для современного здоровья.',
  keywords: 'pravilo, славянская терапия, декомпрессия позвоночника, русская медицина, тропическое здоровье',
  authors: [{ name: 'Mikhail Bondaruk' }],
  openGraph: {
    title: 'Pravilo.Club - Древняя Славянская Мудрость',
    description: 'Традиционный русский метод декомпрессии позвоночника в тропическом раю',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}