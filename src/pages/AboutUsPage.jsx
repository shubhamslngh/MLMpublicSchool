import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Trophy, BookOpen, Users, Globe, HandHeart } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - MLM Public School</title>
        <meta name="description" content="MLM Public School's mission to provide quality convent and modern education to rural communities in Uttar Pradesh." />
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
                Our Mission for Rural India
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#4f5a53] text-center max-w-3xl mx-auto leading-relaxed"
              >
                Providing quality convent and modern education to rural communities in Uttar Pradesh.
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
              className="max-w-4xl mx-auto mb-20"
            >
              <h2 className="text-4xl font-bold mb-8 text-[#17261f] text-center font-playfair">Serving Sultanpur Ghosh & Beyond</h2>
              <p className="text-lg text-[#4f5a53] mb-4 text-center leading-relaxed">
                At MLM Public School, we believe that geography should not limit a child's potential. Located in Sultanpur Ghosh, Khaga, Fatehpur, we are dedicated to bringing world-class educational standards to the heart of Gram India.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-shell rounded-[2rem] p-10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                  <BookOpen className="h-7 w-7 text-[#17261f]" />
                </div>
                <h2 className="text-3xl font-bold mb-5 text-[#17261f] font-playfair">Convent Education Heritage</h2>
                <p className="text-[#4f5a53] text-lg leading-relaxed">
                  We embrace the time-honored values of convent education: discipline, moral integrity, service to others, and a commitment to excellence. These foundational pillars help shape character and instill a strong sense of responsibility in our students.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-shell rounded-[2rem] p-10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                  <Lightbulb className="h-7 w-7 text-[#17261f]" />
                </div>
                <h2 className="text-3xl font-bold mb-5 text-[#17261f] font-playfair">Modern Teaching Methods</h2>
                <p className="text-[#4f5a53] text-lg leading-relaxed">
                  Tradition meets innovation. We integrate smart classroom technology, interactive learning modules, and scientific inquiry-based approaches. This ensures our rural students are just as prepared for the digital age as their urban counterparts.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-shell rounded-[2rem] overflow-hidden"
              >
                <img src="/Father.jpg" alt="Founder father of MLM Public School" className="h-auto w-full object-contain bg-white" />
                <div className="p-8">
                  <p className="eyebrow mb-3">Founder</p>
                  <h2 className="text-3xl font-bold mb-4 text-[#17261f] font-playfair">Father&apos;s Legacy</h2>
                  <p className="text-[#4f5a53] text-lg leading-relaxed">
                    Father laid the foundation of MLM Public School with a vision of discipline, learning, and service. Though he has passed away, his legacy continues to inspire the school every day.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-shell rounded-[2rem] overflow-hidden"
              >
                <img src="/Usha Maurya.jpg" alt="Usha Maurya of MLM Public School" className="h-auto w-full object-contain bg-white" />
                <div className="p-8">
                  <p className="eyebrow mb-3">Guiding Presence</p>
                  <h2 className="text-3xl font-bold mb-4 text-[#17261f] font-playfair">Usha Maurya</h2>
                  <p className="text-[#4f5a53] text-lg leading-relaxed">
                    Usha Maurya, his wife, remains a respected and caring presence whose support, values, and guidance continue to strengthen the school community.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-shell rounded-[2rem] overflow-hidden"
              >
                <img src="/Owner.jpg" alt="Next generation owners of MLM Public School" className="h-auto w-full object-contain bg-white" />
                <div className="p-8">
                  <p className="eyebrow mb-3">Present Leadership</p>
                  <h2 className="text-3xl font-bold mb-4 text-[#17261f] font-playfair">Legacy Continued by the Children</h2>
                  <p className="text-[#4f5a53] text-lg leading-relaxed">
                    Today, the owners who are his children carry that legacy forward, continuing the mission of the school with dedication, responsibility, and care for every student.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
               <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-shell rounded-[2rem] p-10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                  <Heart className="h-7 w-7 text-[#17261f]" />
                </div>
                <h2 className="text-3xl font-bold mb-5 text-[#17261f] font-playfair">Holistic Development</h2>
                <p className="text-[#4f5a53] text-lg leading-relaxed">
                  Education goes beyond textbooks. We focus on the physical, emotional, and social growth of every child through sports, arts, cultural activities, and life skills training. We aim to nurture well-rounded individuals ready for any challenge.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-shell rounded-[2rem] p-10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                  <Globe className="h-7 w-7 text-[#17261f]" />
                </div>
                <h2 className="text-3xl font-bold mb-5 text-[#17261f] font-playfair">Serving Gram India</h2>
                <p className="text-[#4f5a53] text-lg leading-relaxed">
                  Our core commitment is to the rural communities of Fatehpur. We are proud to bridge the urban-rural education gap, providing affordable, high-quality education right at your doorstep in Sultanpur Ghosh.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-shell rounded-[2rem] p-10 md:p-12 mb-20"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                <HandHeart className="h-7 w-7 text-[#17261f]" />
              </div>
              <h2 className="text-3xl font-bold mb-5 text-[#17261f] font-playfair">Values of Respect and Peace</h2>
              <p className="text-[#4f5a53] text-lg leading-relaxed mb-4">
                At MLM Public School, we respect all religions and encourage every student to grow with mutual respect, kindness, and understanding toward all communities.
              </p>
              <p className="text-[#4f5a53] text-lg leading-relaxed">
                We also follow the teachings of Buddhism by promoting compassion, peace, discipline, and thoughtful conduct in daily school life.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-black/5 bg-white/80 p-5 text-[#4f5a53]">
                  <p className="text-sm italic leading-7">“Hatred does not cease by hatred, but only by love.”</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/5 bg-white/80 p-5 text-[#4f5a53]">
                  <p className="text-sm italic leading-7">“Peace comes from within. Do not seek it without.”</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/5 bg-white/80 p-5 text-[#4f5a53]">
                  <p className="text-sm italic leading-7">“Better than a thousand hollow words, is one word that brings peace.”</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-black/10 bg-[#17261f] p-16 text-center text-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                   style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-playfair text-white">
                Join Our Family
              </h2>
              <p className="text-xl text-white/75 max-w-3xl mx-auto mb-12 leading-relaxed">
                Be a part of a movement that is transforming rural education. Together, we can build a brighter future for the children of Uttar Pradesh.
              </p>
              <div className="flex flex-wrap justify-center gap-12">
                 <div className="flex flex-col items-center group">
                    <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <span className="font-semibold tracking-wide uppercase text-sm">Community Focused</span>
                 </div>
                 <div className="flex flex-col items-center group">
                    <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <span className="font-semibold tracking-wide uppercase text-sm">Excellence Driven</span>
                 </div>
                 <div className="flex flex-col items-center group">
                    <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <span className="font-semibold tracking-wide uppercase text-sm">Future Ready</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;
