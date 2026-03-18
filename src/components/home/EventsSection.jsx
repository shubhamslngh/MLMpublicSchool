import React from 'react';
import { CalendarDays, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const events = [
  {
    title: 'Admissions Open for New Session',
    meta: 'Admissions desk',
    description: 'Campus visits and guidance meetings are available for families exploring an academically disciplined school environment.',
  },
  {
    title: 'Monthly Academic Review',
    meta: 'Principal office',
    description: 'Consistent progress reviews help families stay aligned with attendance, classroom habits, and subject growth.',
  },
  {
    title: 'Sports and Culture Week',
    meta: 'Student life',
    description: 'A balanced schedule of athletics and performances supports confidence, teamwork, and participation beyond the classroom.',
  },
];

const EventsSection = () => {
  return (
    <section className="section-tint border-y border-white/70">
      <div className="container px-4 py-16 md:py-24">
        <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <NeumoCard size="lg">
            <p className="eyebrow mb-4">Notices / events</p>
            <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-brand-ink md:text-5xl">
                Stay informed about important school updates, activities, and upcoming events.
              </h2>
            </div>
            <div className="mt-8 space-y-4">
              {events.map((event) => (
                <div key={event.title} className="card-pressed rounded-[1.75rem] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">{event.meta}</p>
                      <h3 className="mt-2 text-2xl text-brand-ink">{event.title}</h3>
                    </div>
                    <Newspaper className="mt-1 h-5 w-5 text-brand-gold" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{event.description}</p>
                </div>
              ))}
            </div>
          </NeumoCard>

          <NeumoCard variant="navy" size="lg" className="relative overflow-hidden">
            <div className="absolute right-[-3rem] top-[-3rem] h-40 w-40 rounded-full bg-brand-gold/15 blur-3xl" />
            <p className="eyebrow mb-4 text-white/60">Admissions</p>
            <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-white md:text-5xl">
                Admissions are open for families seeking a disciplined and nurturing learning environment.
              </h2>
            </div>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/74">
              We welcome parents to visit the campus, meet our team, and learn more about the academic and value-based foundation we offer to every student.
            </p>
            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/74">
              <CalendarDays className="mr-2 inline h-4 w-4 text-brand-gold" />
              Admission counselling is available during school working hours.
            </div>
          </NeumoCard>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
