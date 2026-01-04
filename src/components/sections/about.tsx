"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0, damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = Number.isInteger(value) ? Math.round(latest).toString() : latest.toFixed(1);
        ref.current.textContent = `${formatted}${suffix}`;
      }
    });
  }, [springValue, suffix, value]);

  return <p ref={ref} className="text-4xl font-bold text-primary mb-2">0{suffix}</p>;
}

export function About() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">


      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary text-background text-sm font-semibold mb-6 uppercase tracking-wider">
            The Approach
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto">
            I grow your brand while you sleep.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-foreground to-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 border-4 border-primary z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/HR-ed-1765970933301.jpg?width=800&height=1000&resize=contain"
                alt="Olukoju BestChoice"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADESEx/9oADAMBAAIRAxEAPwC3q2qzaZOIba+cTqJRF5SAvazgD2P3+5msuswSXJZYaUMcTsWVFdjtufWTGFjsSexSxS1j//Z"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary px-8 py-4 z-20">
              <p className="text-background font-bold text-lg">5 Years</p>
              <p className="text-background text-sm">Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pt-12 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                I help brands show up consistently online, keeping them running even while you sleep. From beauty brands to real estate, to food businesses to podcasts and so much more.
              </p>
              <p className="text-lg leading-relaxed opacity-80">
                I have helped founders take back their time and show up with a voice that feels true to them, not like everyone else. Your page grows, your inbox buzzes, and you get to stay focused on building your own brand.
              </p>


            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <AnimatedNumber value={87.5} suffix="%" />
                <p className="text-sm opacity-70 uppercase tracking-wide">Success Rate (Last 5 Years)</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <AnimatedNumber value={35} suffix="%" />
                <p className="text-sm opacity-70 uppercase tracking-wide">Avg Increase in Qualified Reach</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <AnimatedNumber value={3} suffix="×" />
                <p className="text-sm opacity-70 uppercase tracking-wide">ROAS Across Paid Campaigns</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <AnimatedNumber value={0} />
                <p className="text-sm opacity-70 uppercase tracking-wide">Missed Launch Days (24mo)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
