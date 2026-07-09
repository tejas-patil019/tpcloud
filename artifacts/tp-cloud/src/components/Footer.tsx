import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-foreground text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold font-mono tracking-tighter">
                TP
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                TP Cloud Technologies
              </span>
            </Link>
            <p className="text-lg font-medium text-white max-w-md">
              Engineering Scalable Cloud Solutions.
            </p>
          </div>
          
          <div className="flex gap-4 sm:gap-8 flex-wrap justify-center font-mono text-sm uppercase tracking-wider text-gray-500">
            <span>Cloud</span>
            <span className="hidden sm:inline">•</span>
            <span>DevOps</span>
            <span className="hidden sm:inline">•</span>
            <span>AI</span>
            <span className="hidden sm:inline">•</span>
            <span>Infrastructure</span>
            <span className="hidden sm:inline">•</span>
            <span>Security</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} TP Cloud Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
