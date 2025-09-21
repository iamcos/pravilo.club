import type { Metadata } from 'next'
import { Crimson_Text, Open_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--slavic-font-primary',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--slavic-font-secondary',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--slavic-font-accent',
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
      <body className={`${crimsonText.variable} ${openSans.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  )
}