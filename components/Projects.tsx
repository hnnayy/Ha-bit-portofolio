"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { getImageKitUrl } from "../utils/imagekit";

type Project = {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  image?: string;
  videoSrc?: string;
  webUrl?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    category: "Mobile GIS • Flutter",
    title: "PLN JagaGRID",
    subtitle:
      "Mobile GIS application for power line risk mapping, featuring real-time GPS reporting and high-resolution photo uploads.",
    videoSrc: getImageKitUrl("web-porto/PLN_JagaGRID.mp4"),
    tags: ["Flutter", "GIS", "GPS", "Real-time Data", "Firebase"],
  },
  {
    id: 2,
    category: "Full-Stack Web",
    title: "Document Management System",
    subtitle:
      "Enterprise-grade web system featuring JWT authentication, granular role-based access control, and automated approval workflows.",
    videoSrc: getImageKitUrl("web-porto/dms.mp4"),
    tags: ["Code Igniter 4", "PHP", "MySQL"],
  },
  {
    id: 3,
    category: "Social Media Clone",
    title: "X Clone",
    subtitle:
      "A modern social media platform clone built with Next.js, featuring real-time updates and responsive design.",
    webUrl: "https://x-clone-ui-taupe.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: 4,
    category: "Data Visualization",
    title: "Population Mapping Dashboard",
    subtitle:
      "Scalable data visualization system for demographic analysis built with React.js and real-time Firebase integration.",
    webUrl: "https://citizen-information.vercel.app/",
    tags: ["React", "Javascript", "TailwindCSS", "REST", "Python", "JSON"],
  },
];
  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects(): React.JSX.Element {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "next" | "prev") => {
    const el = scrollerRef.current;
    if (!el) return;
    const distance = el.clientWidth; // scroll by visible width
    el.scrollBy({ left: dir === "next" ? distance : -distance, behavior: "smooth" });
  };

  return (
    
    <section id="projects" className="w-full relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
          Works
        </h2>
        <div className="flex items-center justify-end mb-4 gap-3">
          <button
            aria-label="Prev"
            onClick={() => scroll("prev")}
            className="hidden md:inline-flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={() => scroll("next")}
            className="hidden md:inline-flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          >
            ›
          </button>
        </div>

        <motion.div
          ref={scrollerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-6 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar"
        >
          {projects.map((p) => (
            <motion.article key={p.id} variants={itemVariants} className="snap-start flex-none w-full">
              <div className="relative  bg-orange-500 rounded-xl p-6 shadow-md overflow-hidden text-white h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-extrabold">{String(p.id).padStart(2, "0")}</div>
                    <div className="text-xs uppercase tracking-wide text-[#1b4b8f] mt-1">{p.category}</div>
                  </div>
                  <div className="p-2 rounded-md bg-[#ff6b58]/20">
                    {/* optional top-right icon placeholder */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white opacity-90" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-start gap-6">
                  <div className="w-full bg-black rounded-lg overflow-hidden shadow-inner flex-shrink-0">
                    <div className="w-full aspect-video rounded-md overflow-hidden">
                      {p.videoSrc ? (
                        <video
                          src={p.videoSrc}
                          controls
                          className="w-full h-full object-contain bg-black"
                        />
                      ) : p.webUrl ? (
                        <iframe
                          src={p.webUrl}
                          className="w-full h-full border-0"
                          title={p.title}
                          allowFullScreen
                        />
                      ) : (
                        <Image src={p.image || getImageKitUrl("web-porto/sunflower.png")} alt={p.title} width={640} height={360} className="w-full h-full object-cover" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-3xl font-extrabold">{p.title}</h3>
                    <div className="text-sm tracking-wide text-white/80 mt-1">{p.subtitle}</div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="bg-yellow-300 text-xs text-[#b05a00] px-3 py-1 rounded-full font-semibold">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
