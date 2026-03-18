import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import PrincipalMessage from '@/components/home/PrincipalMessage';
import AboutSection from '@/components/home/AboutSection';
import AcademicsSection from '@/components/home/AcademicsSection';
import StatsSection from '@/components/home/StatsSection';
import GallerySection from '@/components/home/GallerySection';
import EventsSection from '@/components/home/EventsSection';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>MLM Public School | Premium Academic Excellence</title>
        <meta
          name="description"
          content="MLM Public School offers a disciplined academic environment with modern facilities, dedicated teaching, and a supportive learning journey for every child."
        />
      </Helmet>

      <div className="min-h-screen">
        <Hero />
        <PrincipalMessage />
        <AboutSection />
        <AcademicsSection />
        <StatsSection />
        <GallerySection />
        <EventsSection />
        <AdmissionsCTA />
      </div>
    </>
  );
};

export default HomePage;
