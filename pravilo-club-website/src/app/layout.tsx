import { getDictionary } from '@/lib/i18n'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pravilo.Club',
  description: 'Authentic Gravity Decompression Therapy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = process.env.NEXT_PUBLIC_LOCALE || 'en'; // Get lang from env variable
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header dictionary={dictionary} lang={lang} />
        {children}
        <Footer dictionary={dictionary} lang={lang} />
        <SchemaMarkup dictionary={dictionary} lang={lang} />
      </body>
    </html>
  );
};
