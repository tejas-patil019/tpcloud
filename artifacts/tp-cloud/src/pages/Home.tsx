import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { TechStack } from '@/components/TechStack';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
