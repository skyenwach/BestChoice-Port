"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jubgf-1765974788917.jpg?width=1920&height=1080&resize=contain"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADESEx/9oADAMBAAIRAxEAPwC3q2qzaZOIba+cTqJRF5SAvazgD2P3+5msuswSXJZYaUMcTsWVFdjtufWTGFjsSexSxS1j//Z"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A2463]/30 via-[#0A2463]/10 to-transparent" />

      <div className="relative z-10 px-6 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9]"
          >
            Engage.<br />
            <span className="text-primary">Convert.</span><br />
            Repeat.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light"
          >
            Olukoju BestChoice | Social Media Strategist | Mass-Comm BSc
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group px-10 py-5 bg-primary text-background font-semibold text-lg transition-all duration-300 hover:bg-foreground hover:text-primary hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Let&apos;s talk growth
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>

            <Link
              href="/cv"
              className="group relative px-10 py-5 border-2 border-white/80 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                View CV
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-8 right-8 text-white/80 text-sm uppercase tracking-widest hidden lg:block"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
