import type { Metadata, Viewport } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Surya | VS Code Portfolio',
  description: 'A highly interactive portfolio mimicking the VS Code interface.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${jetBrainsMono.variable} antialiased font-mono overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
