import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Surya | VS Code Portfolio',
  description: 'A highly interactive portfolio mimicking the VS Code interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased font-mono overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
