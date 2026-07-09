import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Target, Lightbulb, Shield, Users, Zap, Award, Search, Handshake, Activity } from 'lucide-react';

export function About() {
  const values = [
    { icon: <Lightbulb size={24} />, title: "Innovation", desc: "Pushing boundaries with modern cloud and AI architectures." },
    { icon: <Shield size={24} />, title: "Security First", desc: "Enterprise-grade protection integrated into every layer." },
    { icon: <Award size={24} />, title: "Excellence", desc: "Uncompromising engineering quality and precision." },
    { icon: <Users size={24} />, title: "Customer Success", desc: "Your growth and stability are our ultimate metrics." },
    { icon: <Shield size={24} />, title: "Integrity", desc: "Transparent communication and reliable delivery." },
    { icon: <Search size={24} />, title: "Continuous Learning", desc: "Always evolving with the technology landscape." },
    { icon: <Handshake size={24} />, title: "Collaboration", desc: "Working as a seamless extension of your team." },
    { icon: <Zap size={24} />, title: "Accountability", desc: "Taking full ownership of the systems we build." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
              About TP Cloud
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Next-Generation Technology Consulting & Cloud Engineering
            </motion.h3>
            <motion.div variants={fadeUp} className="h-1 w-20 bg-primary mb-8 rounded-full"></motion.div>
            
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are technology transformation partners, not just a DevOps shop. We design, deploy, and manage mission-critical infrastructure that scales.
            </motion.p>
            
            <div className="space-y-6 mt-10">
              <motion.div variants={fadeUp} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Our Mission</h4>
                  <p className="text-muted-foreground">To simplify complex technology challenges with secure, scalable, and innovative solutions that drive business value.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Our Vision</h4>
                  <p className="text-muted-foreground">To become one of the world's most trusted cloud and digital transformation companies, setting the standard for engineering excellence.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-gray-50 border border-border p-5 rounded-xl hover:border-primary/30 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors mb-3">
                  {value.icon}
                </div>
                <h5 className="font-bold text-foreground text-sm mb-1">{value.title}</h5>
                <p className="text-xs text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

