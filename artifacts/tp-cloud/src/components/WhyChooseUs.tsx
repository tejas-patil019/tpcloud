import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Certified Cloud Professionals",
  "Enterprise-Grade Security",
  "Modern Cloud Architecture",
  "DevOps Best Practices",
  "AI-Driven Solutions",
  "24/7 Technical Support",
  "Transparent Communication",
  "Cost Optimization",
  "Reliable Delivery",
  "Scalable Infrastructure"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-border shadow-sm flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-wider uppercase mb-3"
            >
              Why Choose Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              The Partner for Mission-Critical Operations
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              We don't just build systems; we engineer resilience. Our team of certified experts brings enterprise rigor to every project, ensuring your infrastructure is secure, scalable, and optimized for the future.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center justify-center bg-foreground text-white px-6 py-3 rounded-md font-semibold hover:bg-foreground/90 transition-colors"
            >
              Talk to an Engineer
            </motion.a>
          </div>

          <motion.div 
            className="flex-1 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="font-medium text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
