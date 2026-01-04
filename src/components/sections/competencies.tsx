"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const competencies = [
  {
    number: "01",
    title: "Paid Social & Campaign Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Content Strategy & Editorial Planning",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Brand Messaging & Audience Engagement",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Creative Copywriting + Visual Storytelling",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "05",
    title: "Analytics & Performance Optimisation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
];

export function Competencies() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">


      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-primary text-background text-sm font-semibold mb-6 uppercase tracking-wider">
            Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Core Competencies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-4 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="glass-card p-8 rounded-lg group transition-all duration-500 min-h-[200px] flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHxAAAgICAwEBAQAAAAAAAAAAAQIAAwQREiFBMWFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANBzsO3IvNlVy1jGgAZl+ERE2LHJZ//Z"
                  />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-primary mb-4">
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight flex-grow">
                    {item.title}
                  </h3>
                  <div className="mt-6 w-12 h-1 bg-primary group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
