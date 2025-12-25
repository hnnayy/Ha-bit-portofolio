"use client";

import Link from "next/link";

export default function Navbar(): JSX.Element {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full py-4 sticky top-0 z-50 bg-white"> {/* Hilangkan bg-transparent jika mau full width */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Container utama yang jadi "pill" dengan outline */}
        <div className="flex items-center justify-between bg-orange-500 border-2 border-white rounded-full px-8 py-4 shadow-lg">
          {/* Logo (hover bounce) */}
          <Link href="/" className="flex items-center text-2xl font-bold tracking-wide text-white group">
            <span className="inline-block text-[#1b4b8f] group-hover:scale-110 transition-transform duration-300">HA-</span>
            <span className="inline-block text-[#ffffff] group-hover:scale-110 transition-transform duration-300">BIT<span className="text-[#1b4b8f]">.</span></span>
          </Link>

          {/* Nav menu */}
          <nav aria-label="Main navigation" className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90">
              <li>
                <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")} className="pb-1 border-b-2 border-transparent hover:border-yellow-300 transition-all cursor-pointer">ABOUT</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="pb-1 border-b-2 border-transparent hover:border-yellow-300 transition-all cursor-pointer">WORK</a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleSmoothScroll(e, "experience")} className="pb-1 border-b-2 border-transparent hover:border-yellow-300 transition-all cursor-pointer">EXPERIENCE</a>
              </li>
              <li>
                <a href="#achievments" onClick={(e) => handleSmoothScroll(e, "achievments")} className="pb-1 border-b-2 border-transparent hover:border-yellow-300 transition-all cursor-pointer">ACHIEVMENT</a>
              </li>
            </ul>
          </nav>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/hnnayy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white border-2 border-transparent hover:border-yellow-300 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.61 10.58.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.09.67-3.74-1.49-3.74-1.49-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.06-1.23-5.06-5.48 0-1.21.43-2.2 1.12-2.98-.11-.28-.49-1.41.11-2.94 0 0 .91-.29 2.98 1.13a10.3 10.3 0 012.72-.37c.92.01 1.85.12 2.72.37 2.07-1.42 2.98-1.13 2.98-1.13.6 1.53.22 2.66.11 2.94.7.78 1.12 1.77 1.12 2.98 0 4.26-2.6 5.19-5.08 5.47.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .3.2.65.78.54C20.06 20.86 23.25 16.68 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/nadia-mutia-hanin-537823230"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white border-2 border-transparent hover:border-yellow-300 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.5V24h-4.5zM8.64 8h4.31v2.16h.06c.6-1.14 2.07-2.33 4.26-2.33C22.18 7.83 24 9.93 24 13.62V24h-4.5v-9.13c0-2.18-.78-3.67-2.72-3.67-1.48 0-2.36 1-2.75 1.96-.14.34-.17.82-.17 1.3V24H8.64z"/>
              </svg>
            </a>

            <a
              href="mailto:mutiahanin2017@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white border-2 border-transparent hover:border-yellow-300 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 13.065L.75 5.25v13.5A2.25 2.25 0 003 21h18a2.25 2.25 0 002.25-2.25V5.25L12 13.065zM12 11.25L22.5 4.5H1.5L12 11.25z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}