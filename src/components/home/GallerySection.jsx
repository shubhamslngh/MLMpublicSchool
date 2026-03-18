import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import NeumoCard from '@/components/home/NeumoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const galleryImages = [
  {
    src: "/SchoolFront.jpg",
    alt: "School front elevation",
    span: "sm:col-span-2",
  },
  { src: "/ClassRoom.jpg", alt: "Classroom interior", span: "sm:col-span-1" },
  { src: "/park.jpg", alt: "School park area", span: "" },
  {
    src: "/pencilgraffiti.jpg",
    alt: "Educational pencil graffiti wall artwork",
    span: "",
  },
  {
    src: "/treewallgraffiti.jpg",
    alt: "Educational tree graffiti wall artwork",
    span: "sm:col-span-1",
  },
  {
    src: "/Front image of school with park.jpg",
    alt: "Campus with landscaped foreground",
    span: "sm:col-span-2",
  },
];

const GallerySection = () => {
  return (
    <section className="container px-4 py-16 md:py-24">
      <motion.div {...fadeUp}>
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Gallery preview</p>
            <div className="school-divider pb-5">
              <h2 className="text-3xl leading-tight text-brand-ink md:text-5xl">
                A glimpse into our campus, classrooms, and student environment.
              </h2>
            </div>
          </div>
          <Link to="/gallery" className="button-outline px-6 py-3 text-sm">
            View Full Gallery <Camera className="ml-2 h-4 w-4 text-brand-gold" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {galleryImages.map((image) => (
            <NeumoCard key={image.src} className={`overflow-hidden p-0 ${image.span}`}>
              <div className="flex h-full items-center justify-center bg-white p-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-full rounded-[1.5rem] object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </NeumoCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
