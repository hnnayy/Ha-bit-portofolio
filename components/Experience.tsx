"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Experience = {
  id: number;
  year: string;
  eventName: string;
  location: string;
  period: string;
  description?: string;
  type: "research" | "software" | "teaching";
};

const experiences: Experience[] = [
  {
    id: 1,
    year: "2024",
    eventName: "Research & Development Staff",
    location: "MAGICS Laboratory, Telkom University",
    period: "Aug 2024 – Present",
    description: "Contribute to R&D in computer vision and embedded software systems.",
    type: "research",
  },
  {
    id: 2,
    year: "2025",
    eventName: "Research Staff",
    location: "Cyber Security Laboratory, Telkom University",
    period: "Apr 2025 – Jun 2025",
    description: "Developed Keystroke Dynamics Authentication using LSTM (TensorFlow) with 92% user identification accuracy.",
    type: "research",
  },
  {
    id: 3,
    year: "2024",
    eventName: "Research Staff",
    location: "iSmile Laboratory, Telkom University",
    period: "Feb 2024 – Mar 2025",
    description: "Built House Price Insight regression model (scikit-learn), improving accuracy by 18% over baseline. Preprocessed and visualized 10,000+ property records.",
    type: "research",
  },
  {
    id: 4,
    year: "2025",
    eventName: "Mobile Developer",
    location: "PLN JagaGRID Project, PLN Research Collaboration",
    period: "Aug 2025 – Nov 2025",
    description: "Developed cross-platform mobile app using Flutter for GIS-based mapping of high-risk trees near PLN power lines. Implemented real-time reporting workflow with GPS and photo upload.",
    type: "software",
  },
  {
    id: 5,
    year: "2025",
    eventName: "Frontend Developer & Project Manager Intern",
    location: "Yan CeLOE",
    period: "Jun 2025 – Aug 2025",
    description: "Built responsive Document Management System using HTML5, CSS3, JavaScript, CodeIgniter 4. Implemented JWT authentication, RBAC, approval workflow. Led Agile sprints for 5-member team.",
    type: "software",
  },
  {
    id: 6,
    year: "2023",
    eventName: "Frontend Developer",
    location: "Community Service Project, Telkom University",
    period: "Nov 2023 – Jul 2024",
    description: "Developed population mapping dashboard + digital cashbook using React.js + Firebase. Reduced manual data entry by 70% for local administration.",
    type: "software",
  },
  {
    id: 7,
    year: "2024",
    eventName: "Practicum Assistant",
    location: "Digital Signal Processing Laboratory, Telkom University",
    period: "Aug 2024 – Present",
    description: "Guided students in Faculty of Electrical Engineering in DSP theory and MATLAB labs.",
    type: "teaching",
  },
  {
    id: 8,
    year: "2024",
    eventName: "Event Chairman",
    location: "Workshop Pengabdian Masyarakat with AREI",
    period: "Jun 2024",
    description: "Led 30-member team to successfully execute full-day workshop for 80+ participants with zero delays in timeline and cross-division coordination.",
    type: "teaching",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<"research" | "software" | "teaching">("software");

  const filteredExperiences = experiences
    .filter((exp) => exp.type === activeTab)
    .sort((a, b) => {
      if (a.period.includes("Present")) return -1;
      if (b.period.includes("Present")) return 1;
      return parseInt(b.year) - parseInt(a.year);
    });

  const tabs = [
    { key: "research" as const, label: "Research & Development" },
    { key: "software" as const, label: "Software Engineer" },
    { key: "teaching" as const, label: "Teaching & Leadership" },
  ];

  return (
    <section id="experience" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          Experience
        </h2>

        {/* Tab Bar - Orange Background seperti gambar */}
        <div className="flex justify-center bg-orange-500 rounded-lg p-4 mb-12 shadow-lg">
          <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 relative justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative px-4 md:px-6 py-3 text-white font-semibold text-base md:text-lg tracking-wide transition-colors duration-200 hover:text-yellow-200"
              >
                {tab.label}

                {/* Garis kuning bawah saat aktif */}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experience List */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/30">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {filteredExperiences.map((exp) => (
              <motion.article
                key={exp.id}
                variants={itemVariants}
                className="pb-8 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {exp.eventName}
                    </h3>
                    <div className="mt-1 text-gray-600 text-sm md:text-base">
                      <span>{exp.location}</span>
                      <span className="mx-3">•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-gray-500">
                    {exp.year}
                  </div>
                </div>

                {exp.description && (
                  <p className="mt-4 text-gray-700 leading-relaxed text-base">
                    {exp.description}
                  </p>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}