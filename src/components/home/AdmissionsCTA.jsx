import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const AdmissionsCTA = () => {
  return (
    <section className="container px-4 py-16 md:py-24">
      <motion.div {...fadeUp}>
        <NeumoCard size="lg" className="relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.12),transparent_65%)] lg:block" />
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Admissions</p>
              <div className="school-divider pb-5">
                <h2 className="text-3xl leading-tight text-brand-ink md:text-5xl">
                  Begin your child&apos;s journey with a school that values learning, discipline, and care.
                </h2>
              </div>
              <p className="mt-7 max-w-2xl text-base leading-8 text-brand-muted">
                Our admissions team is available to guide families through the process, answer questions, and help you understand how MLM Public School supports each child&apos;s development.
              </p>
            </div>

            <div className="grid gap-4">
              <Link to="/admissions" className="button-primary justify-center px-7 py-3.5 text-sm">
                Schedule a Campus Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="button-outline justify-center px-7 py-3.5 text-sm">
                Contact Admissions <PhoneCall className="ml-2 h-4 w-4 text-brand-gold" />
              </Link>
              <div className="card-pressed rounded-[1.75rem] px-5 py-4 text-sm text-brand-muted">
                Working hours: Monday to Saturday, 8:00 AM to 3:00 PM
              </div>
              <div className="rounded-[1.75rem] border border-brand-gold/20 bg-brand-gold/10 px-5 py-4 text-sm italic text-brand-navy">
                “Better than a thousand hollow words, is one word that brings peace.”
              </div>
            </div>
          </div>
        </NeumoCard>
      </motion.div>
    </section>
  );
};

export default AdmissionsCTA;
