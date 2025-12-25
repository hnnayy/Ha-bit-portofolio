"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getImageKitUrl } from "../utils/imagekit";

type Achievement = {
  id: number;
  label: string;
  title: string;
  description: string;
  credentialUrl?: string;
};

const achievements: Achievement[] = [
  {
    id: 1,
    label: "Key Achievement",
    title: "2nd Place – Palo Alto Networks Cybersecurity Defense Hackathon",
    description:
      "Recognized for excellence in network defense strategies and real-time threat mitigation within a competitive enterprise environment.",
    credentialUrl: getImageKitUrl("web-porto/credential"),
  },
];

export default function Achievment(): React.JSX.Element {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <section id="achievments" className="w-full py-0 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
          Achievement
        </h2>

        <div className="space-y-6">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative bg-orange-500 rounded-xl p-8 md:p-12 text-white overflow-hidden group cursor-pointer transition-all duration-300 shadow-xl border border-white"
            >
              {/* Cursor-following light effect */}
              {isHovered && (
                <div
                  className="absolute pointer-events-none transition-opacity duration-300"
                  style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    width: "400px",
                    height: "400px",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0) 70%)",
                    pointerEvents: "none",
                  }}
                />
              )}
              {/* Badge/Icon placeholder on the right */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-20">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-white"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="relative z-10 max-w-3xl">
                {/* Label */}
                <div className="text-white text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
                  {achievement.label}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight text-[#1b4b8f]">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Credential Link */}
                {achievement.credentialUrl && (
                  <a
                    href={achievement.credentialUrl}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm md:text-base uppercase tracking-wide hover:text-orange-100 transition"
                  >
                    Verify Credential
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="inline"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
