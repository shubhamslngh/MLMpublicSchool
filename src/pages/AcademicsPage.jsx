import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Book, Calculator, Microscope, Globe, Languages, Palette, Trophy, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AcademicsPage = () => {
  const subjects = [
    { icon: Book, name: 'English', description: 'Blending classic literature with modern communication skills.' },
    { icon: Calculator, name: 'Mathematics', description: 'Strong foundation in arithmetic with real-world problem solving.' },
    { icon: Microscope, name: 'Science', description: 'Inquiry-based learning in our modern labs to spark curiosity.' },
    { icon: Globe, name: 'Social Studies', description: 'Understanding our rural roots while exploring the global world.' },
    { icon: Languages, name: 'Languages', description: 'Mastery of Hindi and English to bridge cultural gaps.' },
    { icon: Palette, name: 'Arts', description: 'Fostering creativity through traditional Indian and modern arts.' },
    { icon: Trophy, name: 'Physical Education', description: 'Sports and yoga for physical fitness and mental discipline.' }
  ];

  const gradeInfo = [
    {
      grade: 'Kindergarten (KG)',
      description: 'Foundation for early learning through play-based activities',
      focus: 'Social skills, basic literacy, numbers, and creative expression'
    },
    {
      grade: '1st - 2nd Grade',
      description: 'Building fundamental academic skills',
      focus: 'Reading fluency, basic math operations, scientific observation, and social awareness'
    },
    {
      grade: '3rd - 5th Grade',
      description: 'Developing advanced comprehension and critical thinking',
      focus: 'Reading comprehension, multiplication/division, scientific method, and historical thinking'
    },
    {
      grade: '6th - 8th Grade',
      description: 'Preparing for higher education with rigorous curriculum',
      focus: 'Advanced mathematics, scientific inquiry, essay writing, and analytical skills'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Academics - MLM Public School</title>
        <meta name="description" content="Blending convent education values with modern teaching methods. Comprehensive curriculum from KG to 8th grade." />
      </Helmet>

      <div className="min-h-screen">
        <section className="border-b border-black/5 py-16 md:py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="section-shell rounded-[2rem] p-8 md:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-[#17261f] text-center mb-6 font-playfair"
              >
                Academic Excellence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#4f5a53] text-center max-w-3xl mx-auto leading-relaxed"
              >
                Combining convent education values with modern teaching methods.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-20 text-center"
            >
              <h2 className="text-4xl font-bold text-[#17261f] mb-6 font-playfair">Preparing Students for Tomorrow</h2>
              <p className="text-lg text-[#4f5a53] leading-relaxed">
                At MLM Public School, we bridge the gap between rural upbringing and global opportunities. Our curriculum is designed to retain the discipline and moral framework of convent education while utilizing modern pedagogical tools. We prepare our students to excel whether they choose to serve their local communities in Gram India or pursue careers in urban centers.
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#17261f] font-playfair relative inline-block w-full"
            >
              <span className="relative z-10 px-4 bg-transparent">Subjects Offered</span>
              <span className="absolute left-0 top-1/2 w-full h-[1px] bg-black/10 -z-0"></span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="section-shell rounded-[1.75rem] p-8 group"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                    <subject.icon className="h-6 w-6 text-[#17261f]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#17261f] font-playfair">{subject.name}</h3>
                  <p className="text-[#4f5a53] text-sm leading-relaxed">{subject.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-20"
            >
               <div className="section-shell rounded-[2rem] p-10 mb-16">
                 <div className="flex items-center justify-center mb-6">
                   <Star className="h-12 w-12 text-[#8a7350] fill-[#8a7350]" />
                 </div>
                 <h2 className="text-3xl font-bold text-center mb-6 text-[#17261f] font-playfair">Holistic Development</h2>
                 <p className="text-center text-[#4f5a53] text-lg leading-relaxed max-w-3xl mx-auto">
                   We believe education extends far beyond the classroom. Our program integrates moral science, leadership training, and community service to ensure students grow into responsible, compassionate citizens who contribute positively to rural society.
                 </p>
               </div>

              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#17261f] font-playfair">
                Curriculum by Grade Level
              </h2>
              <Accordion type="single" collapsible className="section-shell overflow-hidden rounded-[2rem]">
                {gradeInfo.map((grade, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-black/5 last:border-0">
                    <AccordionTrigger className="px-8 py-6 text-xl font-semibold text-[#17261f] hover:bg-[#f4f0e8] transition-colors font-playfair">
                      {grade.grade}
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8 pt-2">
                      <div className="py-2">
                        <p className="text-[#17261f] font-medium mb-4 text-lg">{grade.description}</p>
                        <div className="rounded-[1.5rem] bg-[#f4f0e8] p-6">
                          <p className="text-sm font-bold text-[#17261f] uppercase tracking-wide mb-2">Key Focus Areas:</p>
                          <p className="text-[#4f5a53]">{grade.focus}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcademicsPage;
