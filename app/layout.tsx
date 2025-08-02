import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NexusConnect - Digitale Lösungen & Beratung',
  description: 'Eine moderne, professionelle Unternehmenswebsite für NexusConnect, umgestellt auf Next.js. Die Seite stellt Dienstleistungen in den Bereichen FTTH-Beratung, Marketing- & KI-Services sowie Karrieremöglichkeiten vor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0D0D0D] text-white font-sans overflow-x-hidden`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
