import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridge AI — Intelligent SEN Learning',
  description: 'Bridge AI provides an AI-driven ed-tech platform for special education needs, integrating assessments, IEPs, therapy and progress reporting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
