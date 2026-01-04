"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const results = [
  { value: 9, suffix: "", label: "active accounts managed end-to-end" },
  { value: 47, suffix: "%", label: "average increase in qualified reach (last 6 mo)" },
  { value: 3.2, suffix: "×", label: "ROAS across paid campaigns" },
  { value: 0, suffix: "", label: "missed launch days in 24 months", displayValue: "0" },
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Number(obj.val.toFixed(value % 1 !== 0 ? 1 : 0)));
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-[#87CEEB] mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm md:text-base opacity-80">
        {label}
      </p>
    </div>
  );
}

export function Results() {
  return (
    <section className="py-32 px-6 bg-[#0B1F3B]/50 dark:bg-[#0B1F3B]/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Selected Results
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {results.map((item) => (
            <Counter
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
