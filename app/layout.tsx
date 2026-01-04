import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clariome - Clarity, captured weekly',
  description: 'Weekly reflection synthesis with privacy-first design. Review before you commit.',
  keywords: 'no-code, app builder, conversation-driven development, reflection, journaling, privacy, weekly synthesis',
  openGraph: {
    title: 'Clariome - Built with ChatAndBuild',
    description: 'Weekly reflection synthesis with privacy-first design. Review before you commit.',
    images: ['https://cdn.chatandbuild.com/images/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clariome - Built with ChatAndBuild',
    description: 'Weekly reflection synthesis with privacy-first design. Review before you commit.',
    images: ['https://cdn.chatandbuild.com/images/preview.png'],
    site: '@chatandbuild',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Clariome - Built with ChatAndBuild" />
        <meta property="og:description" content="Weekly reflection synthesis with privacy-first design. Review before you commit." />
        <meta property="og:image" content="https://cdn.chatandbuild.com/images/preview.png" />
        <meta property="keywords" content="no-code, app builder, conversation-driven development, reflection, journaling, privacy, weekly synthesis" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Clariome - Built with ChatAndBuild" />
        <meta property="twitter:description" content="Weekly reflection synthesis with privacy-first design. Review before you commit." />
        <meta property="twitter:image" content="https://cdn.chatandbuild.com/images/preview.png" />
        <meta property="twitter:site" content="@chatandbuild" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
