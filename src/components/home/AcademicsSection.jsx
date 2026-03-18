import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, GraduationCap, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const programs = [
  {
    title: 'Foundational stage',
    subtitle: 'Kindergarten to primary',
    description: 'Language fluency, numeracy, classroom confidence, and guided curiosity are developed through structured routines.',
    icon: BookOpenCheck,
  },
  {
    title: 'Middle years',
    subtitle: 'Upper primary progression',
    description: 'Concept clarity, steady assessments, and stronger independent learning habits build academic readiness.',
    icon: GraduationCap,
  },
  {
    title: 'Enrichment culture',
    subtitle: 'Balanced development',
    description: 'Labs, activities, assemblies, and sports create a school experience where discipline and participation grow together.',
    icon: Microscope,
  },
];

const AcademicsSection = () => {
  return (
    <section className="container px-4 py-16 md:py-24">
      <motion.div {...fadeUp}>
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Academics</p>
            <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-brand-ink md:text-5xl">
                A well-planned academic journey that supports every stage of learning.
              </h2>
            </div>
          </div>
          <p className="max-w-xl text-base leading-8 text-brand-muted">
            Our academic program helps children build strong concepts, disciplined study habits, and the confidence to participate actively in class and beyond.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <NeumoCard className="h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint shadow-neumo-inset">
                  <program.icon className="h-7 w-7 text-brand-navy" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">{program.subtitle}</p>
                <h3 className="mt-3 text-2xl text-brand-ink">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{program.description}</p>
                <Link to="/academics" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  View academics <ArrowRight className="h-4 w-4 text-brand-gold" />
                </Link>
              </NeumoCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AcademicsSection;
