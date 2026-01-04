"use client";

import { motion } from "framer-motion";
import { Search, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Week 1 — audit, benchmarks, voice workshop",
    details: [
      "Comprehensive social media audit",
      "Competitor analysis & benchmarks",
      "Brand voice & messaging workshop",
      "Goal setting & KPI definition"
    ],
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Week 2 — calendar, creatives, automations live",
    details: [
      "Content calendar development",
      "Visual asset creation",
      "Automation setup & testing",
      "Campaign launch preparation"
    ],
  },
  {
    icon: TrendingUp,
    title: "Dominate",
    description: "Ongoing — weekly data loops, A/B tests, scaling",
    details: [
      "Weekly performance analysis",
      "A/B testing & optimization",
      "Scaling successful campaigns",
      "Continuous strategy refinement"
    ],
  },
];

export function Process() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">


      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            My Process
          </h2>
        </motion.div>



        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-24 last:mb-0 md:grid md:grid-cols-2 md:gap-16 items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/50">
                  <Icon className="w-8 h-8 text-background" strokeWidth={2} />
                </div>

                {/* Content card - left side on desktop for even indices */}
                <div className={`ml-24 md:ml-0 ${isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}>
                  <div className="glass-card p-8 rounded-lg group transition-all duration-500">
                    <div className="relative">
                      <h3 className="text-3xl font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary mb-4 font-semibold uppercase tracking-wider">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 ${isEven ? 'md:order-2' : ''}`} />
                            <span className="flex-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className={`hidden md:block ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl opacity-70">This proven 3-step process has helped 15+ brands achieve sustainable social media growth. Let&apos;s see what it can do for you.</p>
        </motion.div>
      </div>
    </section>
  );
}
