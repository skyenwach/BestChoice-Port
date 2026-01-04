"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Handshake,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const experiences = [
  {
    title: "SOCIAL MEDIA MANAGER",
    company: "THEDIARYOFANAIJAIMMIGRANT",
    period: "2025",
    points: [
      "Generates content calendar using google excel sheet, sends for approval monthly",
      "Crafts and executes dynamic video edits to captivate target audiences and accomplish project objectives",
      "Monitors, tracks & analysis performance on social media plattorms using tools like instagram insights, meta business suite",
    ],
  },
  {
    title: "SOCIAL MEDIA MANAGER & GRAPHICS DESIGNER",
    company: "PRIME56CONSULTING",
    period: "2023 - 2024",
    points: [
      "Generates content calendar using google excel sheet, sends for approval monthly",
      "Edits pictures & videos according to content calendar using canva pro, Corel draw, photoshop & CapCut",
      "Plans digital campaigns",
      "Conceptualize and produce engaging content for social media platform (IG)",
      "Replies comments and direct messages",
    ],
  },
  {
    title: "SOCIAL MEDIA MANAGER & CONTENT CREATOR",
    company: "TRUETALKWITHTED",
    period: "2022 - PRESENT",
    points: [
      "Oversees the accounts interactions with the public",
      "Conceives, craftes and executes dynamic video edits to captivate target audiences and accomplish project objectives",
      "Monitors, tracks & analysis performance on social media plattorms using tools like instagram insights",
      "Respond to comments, direct messages, e-mails & phone calls",
      "Creates content calendar, designs & edits informative pictures & videos",
      "Implements sound effects and music to enhance overall effect of film or video",
    ],
  },
  {
    title: "SOCIAL MEDIA MANAGER & GRAPHICS DESIGNER",
    company: "FRANKIES COUTURE",
    period: "2020 - PRESENT",
    points: [
      "Generates content calendar using google excel sheet, sends for approval monthly",
      "Edits pictures & videos according to content calendar using canva pro, Corel draw, photoshop & CapCut",
      "Shares edited videos/ pictures on IG",
      "Capture high-quality product and lifestyle images for use in marketing materials, ensuring proper lighting, composition, and editing",
      "Work closely with cross-functional teams to brainstorm ideas, develop concepts, and execute projects that align with beauty & fashion",
      "Actively seek feedback from customers",
    ],
  },
];

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#74c7ec]/10 via-transparent to-[#74c7ec]/5" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-5 py-2.5 bg-[#74c7ec] text-[#1e1e2e] text-sm font-bold mb-6 uppercase tracking-widest shadow-lg shadow-[#74c7ec]/20">
              Professional Profile
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              BestChoice Olukoju
            </h1>
            <p className="text-2xl md:text-3xl text-[#74c7ec] font-semibold tracking-tight">
              Social Media Manager & Content Strategist
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:items-start">
          {/* Sidebar */}
          <div className="space-y-8 lg:flex-1 lg:flex lg:flex-col">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <a
                href="mailto:Akosuachoice@gmail.com"
                className="flex items-center gap-3 glass-card px-6 py-4 hover:scale-105 hover:shadow-lg hover:shadow-[#74c7ec]/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-[#74c7ec] group-hover:scale-110 transition-transform" />
                <span className="font-medium">Akosuachoice@gmail.com</span>
              </a>
              <a
                href="tel:+2348117756100"
                className="flex items-center gap-3 glass-card px-6 py-4 hover:scale-105 hover:shadow-lg hover:shadow-[#74c7ec]/10 transition-all group"
              >
                <Phone className="w-5 h-5 text-[#74c7ec] group-hover:scale-110 transition-transform" />
                <span className="font-medium">+234 811 7756 100</span>
              </a>
              <div className="flex items-center gap-3 glass-card px-6 py-4">
                <MapPin className="w-5 h-5 text-[#74c7ec]" />
                <span className="font-medium">Lagos, Nigeria</span>
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="relative glass-card p-10 overflow-hidden group hover:shadow-2xl hover:shadow-[#74c7ec]/10 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#74c7ec] opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                  className="p-2 bg-[#74c7ec]/10 rounded-lg"
                >
                  <Handshake className="w-6 h-6 text-[#74c7ec]" />
                </motion.div>
                About
              </h2>
              <p className="text-foreground/80 leading-relaxed relative z-10">
                Creative and results driven Social Media Manager with proven
                experience managing multiple brands across diverse industries,
                skilled in developing content strategies that increase
                engagement, reach, and brand visibility.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="relative glass-card p-10 overflow-hidden group hover:shadow-2xl hover:shadow-[#74c7ec]/10 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#74c7ec] opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 bg-[#74c7ec]/10 rounded-lg"
                >
                  <GraduationCap className="w-6 h-6 text-[#74c7ec]" />
                </motion.div>
                Education
              </h2>
              <div className="space-y-4 relative z-10">
                <div>
                  <h3 className="font-bold text-lg mb-1">Mass Communication</h3>
                  <p className="text-foreground/70 mb-1">
                    Ajayi Crowther University
                  </p>
                  <p className="text-sm text-foreground/60">2018 - 2022</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 italic">
                    Influence of Public Relations on Consumer Behavior
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="glass-card p-10 hover:shadow-2xl hover:shadow-[#74c7ec]/10 transition-all duration-500"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-2 bg-[#74c7ec]/10 rounded-lg"
                >
                  <Award className="w-6 h-6 text-[#74c7ec]" />
                </motion.div>
                Expertise
              </h2>
              <ul className="space-y-4">
                {[
                  "Content creation and storytelling",
                  "Social media strategy and management",
                  "Analytics and performance tracking",
                  "Brand development and community engagement",
                  "Campaign planning and execution",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 bg-[#74c7ec] rounded-full mt-2 flex-shrink-0"
                    />
                    <span className="text-foreground/90 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 hover:shadow-2xl hover:shadow-[#74c7ec]/10 transition-all duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-2 bg-[#74c7ec]/10 rounded-lg"
                >
                  <Sparkles className="w-6 h-6 text-[#74c7ec]" />
                </motion.div>
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Content strategy",
                  "Copywriting",
                  "Social media analytics",
                  "Video editing",
                  "Graphics design",
                  "Visual branding",
                  "Community management",
                  "Canva Pro",
                  "Corel Draw",
                  "Photoshop",
                  "CapCut",
                ].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="px-4 py-2 bg-[#74c7ec]/10 border border-[#74c7ec]/20 text-sm font-semibold rounded-lg hover:bg-[#74c7ec]/20 hover:border-[#74c7ec]/40 hover:shadow-lg hover:shadow-[#74c7ec]/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="glass-card p-8 text-center hover:shadow-2xl hover:shadow-[#74c7ec]/10 transition-all duration-500"
            >
              <div className="inline-block p-3 bg-[#74c7ec]/10 rounded-2xl mb-4">
                <Handshake className="w-8 h-8 text-[#74c7ec]" />
              </div>
              <h2 className="text-2xl font-bold mb-3">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm text-foreground/80 mb-6">
                Ready to take your social media presence to the next level?
                Let&apos;s discuss how I can help grow your brand.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#74c7ec] text-[#1e1e2e] font-bold hover:bg-[#1e1e2e] hover:text-[#74c7ec] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#74c7ec]/20 hover:shadow-xl hover:shadow-[#74c7ec]/30"
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Experience Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-[#74c7ec]/10 rounded-xl">
                  <Briefcase className="w-8 h-8 text-[#74c7ec]" />
                </div>
                <h2 className="text-4xl font-bold">Experience</h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#74c7ec] via-[#74c7ec]/50 to-transparent" />

                <div className="space-y-12">
                  {experiences.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="relative pl-12"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                        className="absolute left-0 top-6 w-4 h-4 bg-[#74c7ec] rounded-full border-4 border-background shadow-lg shadow-[#74c7ec]/50"
                        style={{
                          transform: "translateX(-7.5px)",
                        }}
                      />

                      <div className="glass-card p-8 hover:shadow-2xl hover:shadow-[#74c7ec]/10 hover:border-[#74c7ec]/40 hover:-translate-y-1 transition-all duration-300 group">
                        <div className="mb-6">
                          <div className="inline-block px-3 py-1 bg-[#74c7ec]/20 text-[#74c7ec] text-xs font-bold rounded-full mb-4 tracking-wider">
                            {exp.period}
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-[#74c7ec] transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-[#74c7ec] font-bold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: idx * 0.1 + i * 0.05,
                              }}
                              className="flex gap-3 hover:translate-x-2 transition-transform"
                            >
                              <span className="text-[#74c7ec] mt-1 flex-shrink-0 font-bold">
                                →
                              </span>
                              <span className="text-foreground/80 leading-relaxed">
                                {point}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}
