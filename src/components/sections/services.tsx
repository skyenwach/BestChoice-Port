"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Calendar, BarChart3 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Users,
    title: "Done-For-You Management",
    bullets: [
      "Content creation & scheduling",
      "Community management",
      "Performance tracking",
      "Monthly reporting",
    ],
  },
  {
    icon: Rocket,
    title: "Launch Campaigns",
    bullets: [
      "Campaign strategy",
      "Creative development",
      "Ad optimization",
      "Launch support",
    ],
  },
  {
    icon: Calendar,
    title: "Content Sprints",
    bullets: [
      "30-day content calendar",
      "Visual asset creation",
      "Copywriting",
      "Hashtag research",
    ],
  },
  {
    icon: BarChart3,
    title: "Ad Audit & Optimisation",
    bullets: [
      "Performance analysis",
      "Audience insights",
      "Creative recommendations",
      "ROI optimization",
    ],
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg opacity-70 max-w-2xl mx-auto"
          >
            Tailored solutions that transform your social media presence into measurable growth
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.02 : 1,
                  y: hoveredIndex === index ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <div className="relative h-full glass-card transition-all duration-500 rounded-lg overflow-hidden">
                  <div className="relative p-10">
                    <motion.div
                      className="w-20 h-20 mb-8 flex items-center justify-center relative"
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-primary/20" />
                      <service.icon className="w-10 h-10 relative z-10 text-foreground" />
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {service.title}
                    </h3>

                    <ul className="space-y-4">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bullet}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + bulletIndex * 0.05 }}
                          className="flex items-start gap-4 opacity-80"
                        >
                          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 rounded-lg bg-primary/20">
                            <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base font-medium">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      className="mt-8 h-1 rounded-full bg-gradient-to-r from-primary to-primary/50"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
