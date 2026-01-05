"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "BestChoice has been such a great help to since she joined the team. She has great ideas, is consistent and hardworking. I highly recommend her to anyone looking to improve their social media presence.",
    author: "Emmanuella Mike-Bamiloye",
    title: "Co-Founder, TruetalkwithTED",
  },
  {
    quote:
      "I've seen a huge difference in my online presence since she took over, and I've gotten tons of compliments from friends, family, and even clients. You can literally set it and forget it with Bestchoice. She is the ultimate social media sidekick. I couldn't recommend her more highly!",
    author: "Adedoyin Omotara",
    title: "Founder & Coach",
  },
  {
    quote:
      "I didn't have to think about social media at all. It just got done, and it got done right. If you're on the fence about hiring Bestchoice, don't be. She's about throwing you into the spotlight and keeping you there.",
    author: "Lammy Abels",
    title: "Real Estate Agent",
  },
  {
    quote:
      "My artistry finally had the presence it deserved. BestChoice made my socials look alive—even on days I wasn't. Bookings went up, engagement went crazy, and people kept asking what changed.",
    author: "Fola Akintoye",
    title: "Musician & MC",
  },
];

export function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary text-background text-sm font-semibold mb-6 uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            What Clients Say
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-foreground/20 to-primary/20 blur-3xl opacity-50" />
          <div className="relative glass-card p-12 md:p-16 border-2 border-foreground/30">
            <div className="absolute top-8 left-8 text-foreground/20 text-8xl font-bold">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <p className="text-2xl md:text-3xl leading-relaxed mb-12 font-light min-h-[200px] md:min-h-[240px]">
                  {testimonials[current].quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center">
                    <span className="text-background font-bold text-2xl">
                      {testimonials[current].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-primary">
                      {testimonials[current].author}
                    </p>
                    <p className="opacity-70">{testimonials[current].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div
                className="flex justify-center gap-3 mt-12"
                role="tablist"
                aria-label="Testimonial navigation"
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`View testimonial ${index + 1} of ${
                      testimonials.length
                    }`}
                    aria-selected={index === current}
                    role="tab"
                    className={`h-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full ${
                      index === current ? "bg-primary w-12" : "bg-border w-3"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
