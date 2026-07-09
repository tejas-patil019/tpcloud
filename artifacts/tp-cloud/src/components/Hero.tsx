import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Server, ShieldCheck, Cpu, ArrowRight, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Activity size={16} className="text-primary" />
              <span>Enterprise-Grade Technology Partner</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Build. Deploy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Scale.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Accelerate your digital transformation with TP Cloud Technologies. We engineer secure, scalable infrastructure and AI solutions for mission-critical operations.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)] hover:shadow-[0_0_30px_rgba(0,82,255,0.4)]"
              >
                Let's Build Together
                <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-foreground border border-border px-8 py-4 rounded-md text-base font-semibold hover:bg-gray-50 transition-colors shadow-sm"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          {/* Abstract Tech Visual */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-square md:aspect-[4/3] bg-white border border-border rounded-xl shadow-2xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-cyan-400"></div>
              
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="font-mono text-xs text-muted-foreground bg-gray-100 px-2 py-1 rounded">tp-cloud-cluster-prod</div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <Server size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-48 bg-gray-200 rounded"></div>
                  </div>
                  <div className="text-xs font-mono text-green-600 bg-green-100 px-2 py-1 rounded-full">HEALTHY</div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-32 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-40 bg-gray-200 rounded"></div>
                  </div>
                  <div className="text-xs font-mono text-green-600 bg-green-100 px-2 py-1 rounded-full">SECURE</div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Cpu size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                      <div className="h-1 flex-1 bg-gray-200 rounded overflow-hidden">
                        <motion.div 
                          className="h-full bg-purple-500" 
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div className="h-2 w-36 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-12 bg-white border border-border shadow-lg rounded-lg p-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary text-xs">99.9%</span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Uptime SLA</p>
                <p className="text-[10px] text-muted-foreground">Enterprise Grade</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
