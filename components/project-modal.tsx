'use client'

import { useEffect, useState } from 'react'
import { Project } from '@/data/projects'
import { X, ChevronLeft, ChevronRight, ExternalLink, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (project) {
      setIsOpen(true)
      setCurrentImageIndex(0)
    } else {
      setIsOpen(false)
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(onClose, 300)
  }

  const handlePrevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  if (!project) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-3xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        } mx-4 sm:mx-0`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image Gallery */}
          <div className="relative w-full h-80 sm:h-96 bg-muted">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />

            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 text-sm text-foreground">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}

            {/* Image Thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex gap-2 overflow-x-auto">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-primary'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Project Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">View on GitHub</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                )}

                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">Watch on YouTube</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <LinkIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">Visit Live</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
