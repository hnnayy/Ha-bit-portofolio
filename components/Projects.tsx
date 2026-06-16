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
    tags: ["Flutter", "GIS", "GPS", "Real-time Data", "Firebase"],
  },
  {
    id: 2,
    category: "Full-Stack Web",
    title: "Document Management System",
    subtitle:
      "Enterprise-grade web system featuring JWT authentication, granular role-based access control, and automated approval workflows.",
    videoSrc: getImageKitUrl("web-porto/dms.mp4"),
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
    category: "Social Media Clone",
    title: "X Clone",
    subtitle:
      "A modern social media platform clone built with Next.js, featuring real-time updates and responsive design.",
    webUrl: "https://x-clone-ui-taupe.vercel.app/",
    embed: true,
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: 5,
    category: "Data Visualization",
    title: "Population Mapping Dashboard",
    subtitle:
      "Scalable data visualization system for demographic analysis built with React.js and real-time Firebase integration.",
    webUrl: "https://citizen-information.vercel.app/",
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

                  <div className="rounded-md bg-[#ff6b58]/20 p-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white opacity-90"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
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