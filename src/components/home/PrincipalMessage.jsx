import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const PrincipalMessage = () => {
  return (
    <section className="container px-4 py-16 md:py-24">
      <motion.div {...fadeUp} className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <NeumoCard size="lg">
          <p className="eyebrow mb-4">Principal message</p>
          <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-brand-ink md:text-5xl">
                Character, academic focus, and responsible growth remain central to our school culture.
              </h2>
            </div>
            <p className="mt-7 text-base leading-8 text-brand-muted">
              At MLM Public School, we believe children flourish when expectations are clear, teaching is consistent, and the environment feels both disciplined and caring. Our approach is rooted in academic seriousness with a human, supportive tone.
            </p>
            <p className="mt-5 text-base leading-8 text-brand-muted">
              We strive to help every child grow in knowledge, confidence, respect, and responsibility so they are prepared for the opportunities of tomorrow.
            </p>
          <div className="mt-8 inline-flex rounded-full border border-brand-gold/35 bg-brand-gold/10 px-4 py-2 text-sm font-semibold text-brand-navy">
            Principal&apos;s Office
          </div>
          <div className="mt-6 card-pressed rounded-[1.5rem] px-5 py-4">
            <p className="text-sm italic leading-7 text-brand-muted">
              “Peace comes from within. Do not seek it without.”
            </p>
          </div>
        </NeumoCard>

        <NeumoCard variant="inset" size="lg" className="relative overflow-hidden">
          <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-neumo-soft">
            <Quote className="h-6 w-6 text-brand-gold" />
          </div>
          <p className="eyebrow mb-4">Theme concept</p>
          <h3 className="max-w-xl text-3xl leading-tight text-brand-navy md:text-4xl">
            We aim to create a school atmosphere where learning is serious, values are lived daily, and every student feels supported.
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="neumo-surface-soft rounded-[1.75rem] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Academic excellence</p>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                Strong classroom practices, regular assessments, and individual attention help students build lasting understanding.
              </p>
            </div>
            <div className="neumo-surface-soft rounded-[1.75rem] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Holistic development</p>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                Activities, values, discipline, and co-curricular opportunities help children develop confidence beyond the classroom.
              </p>
            </div>
          </div>
        </NeumoCard>
      </motion.div>
    </section>
  );
};

export default PrincipalMessage;
