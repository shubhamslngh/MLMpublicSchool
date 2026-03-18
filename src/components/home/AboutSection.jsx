import React from 'react';
import { HandHeart, Shield, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const values = [
  {
    icon: Users,
    title: 'Parent confidence',
    body: 'Direct information hierarchy, visible trust markers, and formal copy keep the experience reassuring for families.',
  },
  {
    icon: Shield,
    title: 'Institutional trust',
    body: 'Parents trust us for a disciplined environment, caring guidance, and steady academic progress.',
  },
  {
    icon: Sparkles,
    title: 'Holistic growth',
    body: 'We encourage students to grow in academics, values, creativity, confidence, and teamwork.',
  },
  {
    icon: HandHeart,
    title: 'Respect for all faiths',
    body: 'We respect all religions and follow Buddhist values of compassion, peace, and discipline in school life.',
  },
];

const AboutSection = () => {
  return (
    <section className="section-tint border-y border-white/70">
      <div className="container px-4 py-16 md:py-24">
        <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">About the school</p>
            <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-brand-ink md:text-5xl">
                A school community rooted in values, discipline, and meaningful learning.
              </h2>
            </div>
            <p className="mt-7 text-base leading-8 text-brand-muted">
              MLM Public School is committed to providing a safe, encouraging, and academically focused environment where children learn with curiosity, respect, and purpose.
            </p>
            <div className="mt-8 grid gap-4">
              {values.map((value) => (
                <NeumoCard key={value.title} variant="soft" className="flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-neumo-soft">
                    <value.icon className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-brand-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-brand-muted">{value.body}</p>
                  </div>
                </NeumoCard>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <NeumoCard className="overflow-hidden p-0 sm:col-span-2">
              <img src="/SchoolFront.jpg" alt="School building view" className="h-auto w-full object-contain" />
            </NeumoCard>
            <NeumoCard className="overflow-hidden p-0">
              <img src="/Father.jpg" alt="Founder father of MLM Public School" className="h-auto w-full object-contain" />
              <div className="p-5">
                <p className="eyebrow mb-2">Founder&apos;s Legacy</p>
                <p className="text-lg leading-7 text-brand-navy">
                  Father&apos;s vision and dedication continue to guide the school even after his passing.
                </p>
              </div>
            </NeumoCard>
            <NeumoCard className="overflow-hidden p-0">
              <img src="/Usha Maurya.jpg" alt="Usha Maurya of MLM Public School" className="h-auto w-full object-contain" />
              <div className="p-5">
                <p className="eyebrow mb-2">Usha Maurya</p>
                <p className="text-lg leading-7 text-brand-navy">
                  As his wife, Usha Maurya remains an important pillar of care, values, and family guidance in the school community.
                </p>
              </div>
            </NeumoCard>
            <NeumoCard className="overflow-hidden p-0 sm:col-span-2">
              <div className="grid gap-0 md:grid-cols-2">
                <img src="/Owner.jpg" alt="School owner and next generation leadership" className="h-auto w-full object-contain bg-white" />
                <div className="flex items-center p-6">
                  <div>
                    <p className="eyebrow mb-3">Present Leadership</p>
                    <p className="text-2xl leading-snug text-brand-navy">
                      The legacy of Father is now being carried forward by his children, who continue to lead the school with commitment, discipline, and care.
                    </p>
                  </div>
                </div>
              </div>
            </NeumoCard>
            <NeumoCard variant="inset" className="flex items-center sm:col-span-2">
              <div>
                <p className="eyebrow mb-3">Our promise</p>
                <p className="text-2xl leading-snug text-brand-navy">
                  To help each child learn with confidence, behave with integrity, and move forward with strong foundations.
                </p>
              </div>
            </NeumoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
