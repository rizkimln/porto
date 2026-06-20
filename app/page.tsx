'use client';

import { useState, useRef } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ProjectCard } from '@/components/project-card';
import { ProjectModal } from '@/components/project-modal';
import { CertificationCard } from '@/components/certification-card';
import { projects, Project } from '@/data/projects';
import { certifications } from '@/data/certifications';
import { Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <HeroSection onProjectsClick={handleProjectsClick} />

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills and expertise over the past 3 years.</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional certifications and credentials that validate my expertise and commitment to continuous learning.</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">I&apos;m proficient in a variety of technologies and tools to build exceptional digital experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Kotlin
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  MySQL
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Supabase
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Firebase
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Cybersecurity</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Web Penetration Testing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Network Security Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Security Risk Management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Cybersecurity Fundamentals
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Android Studio
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Visual Studio Code
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Cursor
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Kali Linux
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-background border border-border p-8 sm:p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!</p>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:rizkimln30@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:scale-105">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a href="https://github.com/rizkimln" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                <ExternalLink className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rizki-maulana30/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2026 - RIZKI MAULANA</p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
