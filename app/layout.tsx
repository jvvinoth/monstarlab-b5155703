import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { siteContent } from '@/lib/siteContent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: ['mobile app development', 'iOS development', 'Android development', 'PWA', 'web apps', 'Singapore', 'Malaysia', 'startups', 'SMB'],
  authors: [{ name: 'Monstarlab' }],
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    type: 'website',
    locale: 'en_SG',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
