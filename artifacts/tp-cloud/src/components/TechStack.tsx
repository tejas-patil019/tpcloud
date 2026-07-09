import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const technologies = [
  "AWS", "Azure", "GCP", "Cloudflare", 
  "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI/CD", 
  "Terraform", "Ansible", 
  "Python", "Node.js", "Java", "JavaScript", 
  "PostgreSQL", "MySQL", "MongoDB", "Redis", 
  "Linux/Ubuntu", "Nginx", "Apache", 
  "Prometheus", "Grafana", "ELK Stack", 
  "OpenAI", "LangChain", "RAG", "AI Agents"
];

export function TechStack() {
  return (
    <section className="py-20 bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary tracking-wider uppercase mb-3"
          >
            Engineering Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold"
          >
            Powered by Modern Technologies
          </motion.h3>
        </div>
      </div>

      {/* Marquee effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee whitespace-nowrap py-4 flex items-center gap-8">
          {[...technologies, ...technologies].map((tech, idx) => (
            <span 
              key={idx} 
              className="text-lg md:text-xl font-mono text-gray-400 hover:text-white transition-colors duration-300 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Reverse Marquee */}
      <div className="relative flex overflow-x-hidden group mt-4">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee-reverse whitespace-nowrap py-4 flex items-center gap-8">
          {[...technologies, ...technologies].reverse().map((tech, idx) => (
            <span 
              key={idx} 
              className="text-lg md:text-xl font-mono text-gray-400 hover:text-white transition-colors duration-300 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
