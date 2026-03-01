import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });
  
  const display = useTransform(spring, (current) => {
    const val = Math.round(current);
    if (val >= 1000000) {
      const m = val / 1000000;
      return (m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)) + "m";
    }
    if (val >= 1000) {
      const k = val / 1000;
      return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + "k";
    }
    return val.toString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  const stats = [
    { label: "Total Players", value: 15000000, suffix: "+" },
    { label: "Monthly Visits", value: 2500000, suffix: "" },
    { label: "Discord Members", value: 50000, suffix: "+" },
    { label: "Games Released", value: 4, suffix: "" },
  ];

  return (
    <section className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group bg-shiftlock-primary border-4 border-shiftlock-text p-6 rounded-3xl shadow-solid-lg"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-2 tracking-tighter">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </h3>
              <p className="text-sm md:text-base text-white/90 font-black uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
