import type { Metadata } from 'next';
import './globals.css';
import { BottomNavBar } from '@/components/BottomNavBar';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Megapower Portfolio',
  description: 'A portfolio app by Megapower',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen w-full flex-col">
          <main className="flex-1 pb-20">{children}</main>
          <BottomNavBar />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
