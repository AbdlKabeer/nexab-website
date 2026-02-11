import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexab | Modern Real Estate Platform',
  description: 'Discover your dream home with Nexab. We provide premium real estate solutions, property management, and investment opportunities.',
  keywords: ['real estate', 'property management', 'buy home', 'rent apartment', 'Nexab'],
  openGraph: {
    title: 'Nexab | Modern Real Estate Platform',
    description: 'Discover your dream home with Nexab. Premium real estate solutions and investment opportunities.',
    url: 'https://nexab.com',
    siteName: 'Nexab',
    images: [
      {
        url: '/images/landing-page/luxury-penthouse.png',
        width: 1200,
        height: 630,
        alt: 'Nexab Real Estate',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexab | Modern Real Estate Platform',
    description: 'Discover your dream home with Nexab. Premium real estate solutions.',
    images: ['/images/landing-page/luxury-penthouse.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
