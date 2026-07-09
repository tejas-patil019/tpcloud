import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono tracking-wider uppercase mb-3 text-sm"
            >
              Start the Conversation
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Let's Build Something Amazing Together
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-12 max-w-lg"
            >
              Schedule a free consultation with our engineering team to discuss your infrastructure, security, or AI transformation needs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-medium">tpcloudtechnologies@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Global Headquarters</p>
                  <p className="font-medium">Hadapsar, Pune, Maharashtra</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="bg-white rounded-2xl p-8 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-2xl font-bold text-foreground mb-6">Schedule Consultation</h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-first-name" className="text-sm font-medium text-foreground">First Name</label>
                    <input id="contact-first-name" type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-last-name" className="text-sm font-medium text-foreground">Last Name</label>
                    <input id="contact-last-name" type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">Work Email</label>
                  <input id="contact-email" type="email" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-sm font-medium text-foreground">Company Name</label>
                  <input id="contact-company" type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Acme Corp" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-foreground">How can we help?</label>
                  <textarea id="contact-message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="Briefly describe your project or challenge..."></textarea>
                </div>
                
                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg mt-2">
                  Request Consultation
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
