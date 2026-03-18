import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '18+', label: 'Years of community trust' },
  { value: '1:25', label: 'Student-focused classroom mindset' },
  { value: 'KG-VIII', label: 'Structured academic pathway' },
  { value: '100%', label: 'Commitment to values and discipline' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const StatsSection = () => {
  return (
    <section className="section-navy">
      <div className="container px-4 py-16 md:py-24">
        <motion.div {...fadeUp}>
          <div className="mb-10">
            <p className="eyebrow mb-4 text-white/60">Achievements / stats</p>
            <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-white md:text-5xl">
                Our progress is reflected in the trust of families and the steady growth of our students.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),0_18px_40px_-28px_rgba(4,17,45,0.7)] backdrop-blur-sm"
              >
                <p className="text-5xl font-bold text-brand-gold">{stat.value}</p>
                <p className="mt-4 text-sm leading-7 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
