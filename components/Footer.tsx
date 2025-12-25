"use client";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full mt-5 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Section - Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-8 border-b border-orange-600 gap-6">
          <div className="flex gap-8">
            <a 
              href="https://github.com/hnnayy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-gray-900" 
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/nadia-mutia-hanin-537823230" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-gray-900" 
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.424-.103.249-.129.597-.129.946v5.435h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.195-1.608 2.905-1.608 2.121 0 3.714 1.388 3.714 4.373v5.606zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.97-1.715 1.144 0 1.915.76 1.94 1.715 0 .953-.796 1.715-1.995 1.715zm-1.6 11.597h3.554V9.551H3.737v10.901zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
              </svg>
            </a>
            <a 
              href="mailto:mutiahanin2017@gmail.com" 
              className="hover:text-orange-500 transition-colors text-gray-900" 
              aria-label="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-700">
            Nadia Mutia Hanin © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Bottom Section - New Tagline: Progress Over Perfection */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-snug">
            <span className="text-orange-500">PROGRESS</span>{' '}
            <span className="text-[#1b4b8f]">OVER</span>{' '}
            <span className="text-orange-500">PERFECTION</span>{' '}
            <span className="text-[#1b4b8f]">IT'S A</span>{' '}
            <span className="text-orange-500 text-6xl md:text-7xl lg:text-8xl">HA-BIT</span>
          </h2>
          
          <p className="mt-2 text-base md:text-lg text-black max-w-xl mx-auto font-bold">
            Not perfect. Just better.
          </p>
        </div>
      </div>
    </footer>
  );
}