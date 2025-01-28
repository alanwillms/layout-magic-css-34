import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">L</span>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="/active"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Active
            </a>
            <a
              href="/recent"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Recent
            </a>
            <a
              href="/comments"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Comments
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 py-2 px-4 hover:bg-accent hover:text-accent-foreground"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;