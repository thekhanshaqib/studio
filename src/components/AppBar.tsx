import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AppBarProps = {
  title?: string;
  isHomePage?: boolean;
};

// Using a placeholder PDF link as requested.
const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

export function AppBar({ title, isHomePage = false }: AppBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-sm mx-auto flex h-14 items-center px-4">
        {isHomePage ? (
          <div className="flex w-full items-center justify-between">
            <img
              src="https://megapower-mea.com/wp-content/uploads/2021/11/retinalogo.jpg"
              alt="Megapower Logo"
              width={150}
              height={36}
              data-ai-hint="logo"
            />
            <Button variant="ghost" size="icon" asChild>
              <a href={pdfUrl} download="megapower-profile.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 text-primary" />
                <span className="sr-only">Download Profile</span>
              </a>
            </Button>
          </div>
        ) : (
          <div className="grid w-full grid-cols-[auto_1fr_auto] items-center">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5 text-primary" />
                <span className="sr-only">Back to Home</span>
              </Link>
            </Button>
            <h1 className="text-center text-lg font-bold tracking-tight">
              {title}
            </h1>
            <Button variant="ghost" size="icon" asChild>
              <a href={pdfUrl} download="megapower-profile.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 text-primary" />
                <span className="sr-only">Download Profile</span>
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
