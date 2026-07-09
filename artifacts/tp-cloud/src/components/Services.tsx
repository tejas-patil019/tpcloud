import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Cloud, ServerCog, Database, ShieldCheck, Cpu, Code2 } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    description: "Architect and deploy highly available environments.",
    features: ["AWS / Azure / GCP Migration", "Infrastructure Design", "High Availability & DR", "Cost Optimization"],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: <ServerCog className="w-8 h-8" />,
    title: "DevOps Solutions",
    description: "Automate delivery and standardize deployments.",
    features: ["CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Monitoring & Automation"],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Managed Cloud Services",
    description: "Continuous operations and proactive support.",
    features: ["24/7 Operations", "Proactive Monitoring", "Security Updates", "Incident Response"],
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Cloud Security",
    description: "Protect assets with enterprise-grade security.",
    features: ["IAM & Access Control", "Security Audits", "Compliance & WAF", "Vulnerability Assessment"],
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "Integrate intelligence into your workflows.",
    features: ["AI Chatbots & Agents", "Machine Learning Integration", "Document Intelligence", "Process Automation"],
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Software Development",
    description: "Build scalable applications and APIs.",
    features: ["Enterprise Web Apps", "REST APIs & Microservices", "SaaS Platforms", "Database Architecture"],
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-wider uppercase mb-3"
          >
            Core Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Engineering the Future of Your Business
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From cloud migrations to custom AI integrations, we provide end-to-end technology solutions that scale with your ambitions.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-muted-foreground mb-6 h-12">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
