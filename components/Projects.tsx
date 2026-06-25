"use client";

import React, { useRef } from "react";
import Image from "next/image";
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
  githubUrl?: string;

  // true atau undefined: tampilkan website menggunakan iframe
  // false: tampilkan screenshot dan buka link di tab baru
  embed?: boolean;

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
    githubUrl: "https://github.com/hnnayy/PLN-JagaGRID-New",
    tags: ["Flutter", "GIS", "GPS", "Real-time Data", "Firebase"],
  },
  {
    id: 2,
    category: "Full-Stack Web",
    title: "Document Management System",
    subtitle:
      "Enterprise-grade web system featuring JWT authentication, granular role-based access control, and automated approval workflows.",
    videoSrc: getImageKitUrl("web-porto/dms.mp4"),
    githubUrl: "https://github.com/hnnayy/magang-DMS",
    tags: ["CodeIgniter 4", "PHP", "MySQL"],
  },
  
{
  id: 3,
  category: "Project Management",
  title: "Agile Project Management Documentation",
  subtitle:
    "Agile project management documentation covering sprint planning, task distribution, development progress, and project evaluation.",
  image: getImageKitUrl("web-porto/notion.png"),
  webUrl:
    "https://striped-satin-536.notion.site/Document-Management-System-Agile-Method-6a0cfcbe9b1c8204a1e78110182a560f?pvs=74",
  embed: false,
  tags: ["Agile", "Notion", "Sprint Planning", "Project Management"],
},
{
    id: 4,
    category: "Mobile Application Security",
    title: "Automated Mobile SAST and DAST System",
    subtitle:
      "An automated mobile security testing pipeline that integrates SAST and DAST using Jenkins, Frida, Android Emulator, and automated security reporting Dashboard also send the reports for developer's email.",
    webUrl: "https://www.youtube-nocookie.com/embed/VdIIOCMCzy4",
    githubUrl: "https://github.com/hnnayy/security-mobile",
    embed: true,
    tags: ["Jenkins", "Automated Testing", "Frida", "SAST", "DAST", "Android"],
  },
  {
    id: 5,
    category: "Social Media Clone",
    title: "X Clone",
    subtitle:
      "A modern social media platform clone built with Next.js, featuring real-time updates and responsive design.",
    webUrl: "https://x-clone-ui-taupe.vercel.app/",
    githubUrl: "https://github.com/hnnayy/x-clone-ui",
    embed: true,
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: 6,
    category: "Data Visualization",
    title: "Population Mapping Dashboard",
    subtitle:
      "Scalable data visualization system for demographic analysis built with React.js and real-time Firebase integration.",
    webUrl: "https://citizen-information.vercel.app/",
    githubUrl: "https://github.com/hnnayy/population-mapping",
    embed: true,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Python",
      "JSON",
    ],
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
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects(): React.JSX.Element {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "next" | "prev") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const scrollDistance = scroller.clientWidth;

    scroller.scrollBy({
      left: direction === "next" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative w-full">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900 md:text-5xl">
          Works
        </h2>

        <div className="mb-4 flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => scroll("prev")}
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xl text-white transition hover:bg-orange-600 md:inline-flex"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => scroll("next")}
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xl text-white transition hover:bg-orange-600 md:inline-flex"
          >
            ›
          </button>
        </div>

        <motion.div
          ref={scrollerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="-mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-6 pb-6 hide-scrollbar"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="w-full flex-none snap-start"
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-orange-500 p-6 text-white shadow-md">
                {/* Project header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-extrabold">
                      {String(project.id).padStart(2, "0")}
                    </div>

                    <div className="mt-1 text-xs uppercase tracking-wide text-[#1b4b8f]">
                      {project.category}
                    </div>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub repository for ${project.title}`}
                      title="View GitHub repository"
                      className="rounded-md bg-[#ff6b58]/20 p-2 text-white transition hover:scale-110 hover:bg-[#ff6b58]/40"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="mt-6 flex flex-col items-start gap-6">
                  {/* Project preview */}
                  <div className="w-full flex-shrink-0 overflow-hidden rounded-lg bg-black shadow-inner">
                    <div className="aspect-video w-full overflow-hidden rounded-md">
                      {project.videoSrc ? (
                        <video
                          src={project.videoSrc}
                          controls
                          preload="metadata"
                          className="h-full w-full bg-black object-contain"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : project.webUrl && project.embed !== false ? (
                        <iframe
                          src={project.webUrl}
                          title={project.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="h-full w-full border-0 bg-white"
                        />
                      ) : project.image ? (
                        project.webUrl ? (
                          <a
                            href={project.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="group relative block h-full w-full overflow-hidden"
                          >
                            <Image
                              src={project.image}
                              alt={`Preview of ${project.title}`}
                              width={1280}
                              height={720}
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/50">
                              <span className="translate-y-2 rounded-full bg-orange-500 px-5 py-2 font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                View Documentation
                              </span>
                            </div>
                          </a>
                        ) : (
                          <Image
                            src={project.image}
                            alt={`Preview of ${project.title}`}
                            width={1280}
                            height={720}
                            className="h-full w-full object-cover"
                          />
                        )
                      ) : (
                        <Image
                          src={getImageKitUrl(
                            "web-porto/sunflower.png",
                          )}
                          alt={`Preview of ${project.title}`}
                          width={1280}
                          height={720}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="w-full flex-1">
                    <h3 className="text-3xl font-extrabold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed tracking-wide text-white/80">
                      {project.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-[#b05a00]"
                        >
                          {tag}
                        </span>
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