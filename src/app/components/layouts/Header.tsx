"use client"
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed text-text-primary top-0 left-0 h-20 flex justify-between items-center w-full px-5 py-3.5 lg:px-10 bg-background z-50 border-b border-text-primary border-opacity-50 font-[var(--font-ui)]">
      {/* ロゴはPlayfair Display */}
      <div className="text-2xl [font-variant:small-caps] font-[var(--font-playfair)] tracking-wide">
        LOGO
      </div>
      <div className="relative">
        <button
          className="flex flex-col justify-center items-center h-9 w-9 py-2 font-[var(--font-ui)] cursor-pointer gap-y-1"
          onClick={() => setOpen(!open)}
          aria-label="Open Menu"
        >
          {/* 1本目 */}
          <span
            className={`
              block w-7 h-0.5 bg-text-primary rounded-sm transition-all duration-300 origin-center
              ${open ? "rotate-45 translate-y-0.25" : ""}
            `}
          />
          {/* 2本目 */}
          <span
            className={`
              block w-7 h-0.5 bg-text-primary rounded-sm transition-all duration-300 origin-center
              ${open ? "opacity-0" : ""}
            `}
          />
          {/* 3本目 */}
          <span
            className={`
              block w-7 h-0.5 bg-text-primary rounded-sm transition-all duration-300 origin-center
              ${open ? "-rotate-45 -translate-y-2.5" : ""}
            `}
          />
        </button>
        {/* メニュー本体 */}
        {open && (
          <nav className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-4 flex flex-col gap-4 z-50 font-[var(--font-ui)]">
            <Link href="/" className="px-4 py-2 hover:bg-gray-100">Home</Link>
            <Link href="/about" className="px-4 py-2 hover:bg-gray-100">About</Link>
            <Link href="/blog" className="px-4 py-2 hover:bg-gray-100">Blog</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;