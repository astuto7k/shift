import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-shiftlock-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 relative z-10 text-shiftlock-text uppercase leading-[0.95]">
              WE DON'T JUST MAKE GAMES. <br />
              <span className="text-white">WE CREATE CULTURE.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6 text-xl text-shiftlock-text-muted font-bold bg-white border-4 border-shiftlock-text p-8 md:p-12 rounded-3xl shadow-solid-lg"
          >
            <p className="text-shiftlock-text">
              Shiftlock was born from the desire to raise the bar on Roblox. We are a studio focused on absurd quality, addictive game design, and strong communities.
            </p>
            <p>
              Our team is made up of veterans and emerging talents who understand what the new generation of players wants: fast, polished, and highly social experiences.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
