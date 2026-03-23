import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const highlights = [
  {
    title: 'Structured Learning',
    body: 'Progressive academic guidance from foundational years through middle school.',
    icon: Building2,
  },
  {
    title: 'Disciplined Culture',
    body: 'An environment that balances achievement, conduct, and care.',
    icon: ShieldCheck,
  },
  {
    title: 'Trusted Identity',
    body: 'A school environment built on consistency, clarity, and parent confidence.',
    icon: Award,
  },
];

const Hero = () => {
  return (
    <section className="minimal-grid overflow-hidden border-b border-white/60">
      <div className="container px-4 py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <NeumoCard className="relative overflow-hidden px-8 py-10 md:px-12 md:py-14" size="lg">
              <div className="absolute right-[-4rem] top-[-3rem] h-44 w-44 rounded-full bg-brand-gold/10 blur-3xl" />
              <div className="absolute left-[-3rem] top-14 h-32 w-32 rounded-full bg-brand-navy/6 blur-3xl" />
              <p className="eyebrow mb-5">Premium academic identity</p>
              <div className="school-divider pb-5">
                <h1 className="max-w-3xl text-balance text-4xl leading-tight text-brand-ink md:text-6xl">
                  Learning shaped by discipline, care, and confident academic growth.
                </h1>
              </div>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
                MLM Public School nurtures young minds through structured teaching, value-based education, and a supportive campus atmosphere where every student is encouraged to grow with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/admissions" className="button-primary px-7 py-3.5 text-sm">
                  Apply for Admission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/gallery" className="button-outline px-7 py-3.5 text-sm">
                  Explore Campus
                </Link>
              </div>
              <div className="mt-10 grid gap-4 border-t border-brand-navy/10 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-bold text-brand-navy">CBSE/ICSE</p>
                  <p className="mt-1 text-sm text-brand-muted">Strong academic foundation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-navy">Nursery to 5th</p>
                  <p className="mt-1 text-sm text-brand-muted">Guided academic progression</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-navy">Parent Trust</p>
                  <p className="mt-1 text-sm text-brand-muted">Clarity, discipline, and support</p>
                </div>
              </div>
            </NeumoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <NeumoCard className="relative overflow-hidden p-4 sm:col-span-2">
              <img
                src="/Front image of school with park.jpg"
                alt="MLM Public School campus"
                className="h-auto w-full rounded-[1.6rem] object-contain"
              />
              <div className="glass-panel absolute inset-x-6 bottom-6 rounded-[1.5rem] p-5 shadow-neumo-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">Welcome to MLM Public School</p>
                <p className="mt-2 max-w-md font-heading text-2xl leading-snug text-brand-navy">
                  A campus that encourages learning, values, and joyful participation.
                </p>
              </div>
            </NeumoCard>

            {highlights.map((item) => (
              <NeumoCard key={item.title} variant="soft" className="min-h-[220px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint shadow-neumo-inset">
                  <item.icon className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="mt-5 text-2xl text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{item.body}</p>
              </NeumoCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
