"use client";

import Image from "next/image";
import { getImageKitUrl } from "../utils/imagekit";

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left column: logo, subtitle, title, description, CTA */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-sm uppercase tracking-widest text-orange-500 font-semibold">FULLSTACK and MOBILE DEVELOPER</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">NADIA
            <br />MUTIA H.
          </h1>

          <p className="text-gray-600 max-w-md">Specializing in Mobile Development, Full-stack Web, Machine Learning, and GIS-based Systems. Engineering efficient solutions for complex digital challenges.</p>

          <div>
            <a
              href="https://drive.google.com/file/d/1bFAnMwQoskOHiFVD1WDSQB-0tHVjqV66/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg"
            >
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <Image src={getImageKitUrl("web-porto/sunflower.png")} alt="CV Icon" width={24} height={24} />
              </span>
              MY CV
            </a>
          </div>
        </div>

        {/* Right column: illustration */}
        <div className="flex justify-end">
          <div className="w-full max-w-lg">
            <Image src="/tes.png" alt="Logo" width={900} height={700} className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
