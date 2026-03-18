import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const images = [
  {
    url: '/Front image of school with park.jpg',
    title: 'Campus Front',
    category: 'Campus',
    description: 'Front view of the school with the surrounding park area.',
  },
  {
    url: '/SchoolFront.jpg',
    title: 'School Building',
    category: 'Campus',
    description: 'A clear look at the building exterior and school frontage.',
  },
  {
    url: '/Maingate.jpg',
    title: 'Main Gate',
    category: 'Campus',
    description: 'Entry point to the campus and main access route.',
  },
  {
    url: '/ClassRoom.jpg',
    title: 'Classroom',
    category: 'Classrooms',
    description: 'Academic space used for regular classroom sessions.',
  },
  {
    url: '/Playschool room.jpg',
    title: 'Play School Room',
    category: 'Classrooms',
    description: 'Interior room arranged for early learning and activity-based teaching.',
  },
  {
    url: '/play classroom.jpg',
    title: 'Activity Classroom',
    category: 'Classrooms',
    description: 'A playful setup for younger learners.',
  },
  {
    url: '/AdmissionOffice.jpg',
    title: 'Admission Office',
    category: 'Facilities',
    description: 'Dedicated space for admission and parent interaction.',
  },
  {
    url: '/MLM board.jpg',
    title: 'School Board',
    category: 'Facilities',
    description: 'School identity signage from the campus site.',
  },
  {
    url: '/park.jpg',
    title: 'Park Area',
    category: 'Play Area',
    description: 'Open campus park space for movement and recreation.',
  },
  {
    url: '/park_merry.jpg',
    title: 'Merry-Go-Round',
    category: 'Play Area',
    description: 'A playful outdoor element for younger children.',
  },
  {
    url: '/park_swing.jpg',
    title: 'Swing Zone',
    category: 'Play Area',
    description: 'Simple outdoor play equipment inside the campus.',
  },
  {
    url: '/Voleyball.jpg',
    title: 'Sports Space',
    category: 'Activities',
    description: 'Outdoor activity area used for games and physical engagement.',
  },
];

const categories = ['All', 'Campus', 'Classrooms', 'Facilities', 'Play Area', 'Activities'];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Gallery - MLM Public School</title>
        <meta
          name="description"
          content="View actual campus, classroom, and play-area photographs from MLM Public School."
        />
      </Helmet>

      <div className="min-h-screen">
        <section className="border-b border-black/5">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="section-shell rounded-[2rem] p-8 md:p-12">
              <p className="eyebrow mb-4">School Gallery</p>
              <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <div>
                  <h1 className="text-5xl text-[#17261f] md:text-7xl">Moments from our campus and learning spaces.</h1>
                  <p className="mt-5 max-w-2xl text-base text-[#4f5a53] md:text-lg">
                    Explore views of our school campus, classrooms, facilities, and activity areas that reflect everyday life at MLM Public School.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-black/5 bg-[#f4f0e8] p-5 text-sm leading-7 text-[#4f5a53]">
                  These photographs offer parents and visitors a closer look at the environment where students learn, play, and grow each day.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant="outline"
                className={`rounded-full px-5 ${
                  selectedCategory === category
                    ? 'border-[#17261f] bg-[#17261f] text-white hover:bg-[#17261f]'
                    : 'border-black/10 bg-white/80 text-[#4f5a53] hover:bg-[#f4f0e8] hover:text-[#17261f]'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredImages.map((image, index) => (
              <motion.button
                type="button"
                key={image.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => setSelectedImage(image)}
                className="section-shell group overflow-hidden rounded-[2rem] text-left"
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="eyebrow">{image.category}</p>
                  <h2 className="text-2xl text-[#17261f]">{image.title}</h2>
                  <p className="text-sm leading-7 text-[#4f5a53]">{image.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl overflow-hidden rounded-[2rem] border-0 bg-[#f7f2e9] p-0">
            <DialogClose className="absolute right-5 top-5 z-50 rounded-full border border-black/10 bg-white p-2 text-[#17261f] transition-colors hover:bg-[#f4f0e8]">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedImage && (
              <div className="grid gap-0 md:grid-cols-[1.25fr_0.75fr]">
                <div className="bg-white">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="h-auto max-h-[80vh] w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-end p-8 md:p-10">
                  <p className="eyebrow mb-3">{selectedImage.category}</p>
                  <h3 className="text-4xl text-[#17261f]">{selectedImage.title}</h3>
                  <p className="mt-4 text-[#4f5a53]">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default GalleryPage;
