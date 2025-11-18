"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 10000, suffix: "+", label: "Shipments Delivered", prefix: "" },
  { value: 152, suffix: "", label: "Countries Reached", prefix: "" },
  { value: 500, suffix: " Cr+", label: "Trade Volume", prefix: "₹" },
  { value: 500, suffix: "+", label: "Clients Worldwide", prefix: "" },
  { value: 99.8, suffix: "%", label: "On-Time Delivery", prefix: "" },
  { value: 15, suffix: "+", label: "Years Experience", prefix: "" },
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (duration / 16);
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(intervals[index]);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }
      }, 16);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-container bg-gradient-to-br from-business-navy to-ocean-blue text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-xl opacity-90">
          Building trust through proven results
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 font-montserrat">
              {stat.prefix}
              {stat.value % 1 !== 0
                ? counts[index].toFixed(1)
                : Math.floor(counts[index]).toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-sm md:text-base opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
