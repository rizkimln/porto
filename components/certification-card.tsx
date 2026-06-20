'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Certification } from '@/data/certifications'
import { useState } from 'react'

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Certificate Image */}
      <div className="relative w-full h-64 overflow-hidden bg-secondary">
        <Image
          src={certification.image}
          alt={certification.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Certificate Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {certification.title}
        </h3>

        <div className="space-y-3 mb-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Issuer:</span> {certification.issuer}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Date:</span> {certification.date}
          </p>
        </div>

        {/* View Credential Button */}
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 group/btn"
        >
          <span>View Credential</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
