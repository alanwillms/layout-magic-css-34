import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#9b87f5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#9b87f5]/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-white text-lg">Fun News</span>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="/active"
              className="transition-colors hover:text-white/80 text-white/60"
            >
              Active
            </a>
            <a
              href="/recent"
              className="transition-colors hover:text-white/80 text-white/60"
            >
              Recent
            </a>
            <a
              href="/comments"
              className="transition-colors hover:text-white/80 text-white/60"
            >
              Comments
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Link
              to="/new"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 py-2 px-4 bg-white/10 hover:bg-white/20 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 py-2 px-4 hover:bg-white/10 text-white"
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