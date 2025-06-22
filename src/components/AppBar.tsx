import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AppBarProps = {
  title: string;
};

export function AppBar({ title }: AppBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-sm mx-auto flex h-14 items-center px-4">
        <Button variant="ghost" size="icon" asChild className="-ml-3">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Home</span>
          </Link>
        </Button>
        <h1 className="ml-2 text-lg font-bold tracking-tight">{title}</h1>
      </div>
    </header>
  );
}
