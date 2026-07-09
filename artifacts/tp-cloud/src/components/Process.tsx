import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze your infrastructure, understand business goals, and identify technical bottlenecks."
  },
  {
    num: "02",
    title: "Planning",
    desc: "Our architects design secure, scalable cloud and technical blueprints tailored to your needs."
  },
  {
    num: "03",
    title: "Development",
    desc: "Engineers build robust solutions utilizing modern code, DevOps practices, and AI tools."
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Seamless, zero-downtime production implementations with rigorous automated testing."
  },
  {
    num: "05",
    title: "Monitoring",
    desc: "Continuous optimization, 24/7 proactive support, and performance tuning."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-wider uppercase mb-3"
          >
            Methodology
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Engineered for Predictability
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden lg:block -translate-y-1/2"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="relative bg-white lg:bg-transparent"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 border-2 border-primary flex items-center justify-center text-xl font-mono font-bold text-primary mb-6 mx-auto lg:mx-0 relative z-10 shadow-sm">
                  {step.num}
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
