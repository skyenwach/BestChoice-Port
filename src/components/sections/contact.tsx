"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary text-background text-sm font-semibold mb-6 uppercase tracking-wider">
            Let&apos;s Connect
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Ready to take social media
            <br /> management off your plate?
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Book a free 20-minute strategy call.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-16 text-center border-2 border-primary"
          >
            <div className="w-24 h-24 bg-primary flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-12 h-12 text-background"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Message sent!</h3>
            <p className="text-xl opacity-80">
              Expect a reply within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/sunshinesocialss@gmail.com"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const form = e.currentTarget;
              fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { Accept: "application/json" },
              }).finally(() => {
                setIsSubmitting(false);
                setSubmitted(true);
              });
            }}
            className="glass-card p-12 border-2 border-border hover:border-foreground/50 transition-colors duration-500"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact from Portfolio"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 uppercase tracking-wider"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 uppercase tracking-wider"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors text-lg"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="instagram"
                className="block text-sm font-semibold mb-3 uppercase tracking-wider"
              >
                Instagram handle *
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                required
                placeholder="@"
                className="w-full px-6 py-4 bg-background border-2 border-border focus:border-[#87CEEB] focus:outline-none transition-colors text-lg"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="pain-point"
                className="block text-sm font-semibold mb-3 uppercase tracking-wider"
              >
                Biggest pain-point *
              </label>
              <textarea
                id="pain-point"
                name="pain-point"
                required
                rows={6}
                className="w-full px-6 py-4 bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none text-lg"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Sending message" : "Send message"}
              className="w-full py-6 bg-primary text-background font-bold text-lg uppercase tracking-wider hover:bg-foreground hover:text-primary transition-all duration-300 hover:scale-[1.02] border-2 border-primary hover:border-foreground disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary disabled:hover:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
