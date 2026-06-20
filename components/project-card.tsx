'use client'

import { Project } from '@/data/projects'
import { ExternalLink, Link as LinkIcon, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
          <div className="flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
              </a>
            )}
            {project.youtubeLink && (
              <a
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Live Link"
              >
                <LinkIcon className="w-5 h-5 text-primary" />
              </a>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onSelect(project)
            }}
            className="flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-medium"
          >
            Details <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
