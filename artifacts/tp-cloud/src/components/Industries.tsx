import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Building2, HeartPulse, Landmark, GraduationCap, Factory, ShoppingCart, Truck, Home, Briefcase, Rocket, Cloud } from 'lucide-react';

const industries = [
  { name: "Healthcare", icon: <HeartPulse size={20} /> },
  { name: "Banking & Finance", icon: <Landmark size={20} /> },
  { name: "Education", icon: <GraduationCap size={20} /> },
  { name: "Manufacturing", icon: <Factory size={20} /> },
  { name: "Retail & E-commerce", icon: <ShoppingCart size={20} /> },
  { name: "Logistics", icon: <Truck size={20} /> },
  { name: "Real Estate", icon: <Home size={20} /> },
  { name: "Government", icon: <Building2 size={20} /> },
  { name: "SaaS Companies", icon: <Cloud size={20} /> },
  { name: "Startups", icon: <Rocket size={20} /> },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
              Industries We Serve
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted Across Sectors
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md text-right hidden md:block">
            Delivering compliant, secure, and performant solutions tailored to industry-specific regulatory requirements.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-gray-50 hover:bg-white hover:border-primary/50 hover:shadow-md transition-all cursor-default group"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {ind.icon}
              </div>
              <span className="font-semibold text-sm text-foreground">{ind.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
