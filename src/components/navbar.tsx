import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Menu, Sparkle } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="block md:hidden" />
        <Link href="/">
          <h1
            className={cn(
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">
          Upgrade <Sparkle className="h4 w-4 fill-white ml-2" />
        </Button>
        <ThemeToggle />
        <UserButton />
      </div>
    </div>
  );
};
