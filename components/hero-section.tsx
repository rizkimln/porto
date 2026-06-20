'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onProjectsClick: () => void;
}

export function HeroSection({ onProjectsClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-34 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all">
            <Image src="/profil.png" alt="Profil Photo" fill className="object-cover" priority />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Rizki Maulana</h2>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Informatics Graduate{' '}
          <span className=" block whitespace-nowrap bg-gradient-to-r from-primary to-primary/60  bg-clip-text block text-sm sm:text-base lg:text-lg text-transparent">Software Development • Cybersecurity • IT Infrastructure</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed text-balance">
          Informatics undergraduate at Universitas Islam Indonesia who has successfully completed the final thesis defense and is awaiting graduation. Experienced in developing software solutions and actively expanding knowledge in
          cybersecurity, digital forensics, networking, and IT infrastructure through coursework, certifications, and hands-on projects. Familiar with web application development using Next.js and Supabase, while possessing a strong
          interest in network operations, system security, and technologyd riven problem solving.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onProjectsClick}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contact" className="px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-border">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">3+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
}
