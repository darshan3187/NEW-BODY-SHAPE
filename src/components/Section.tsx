import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  title?: string
  subtitle?: string
}

const Section = ({ children, id, className = "", title, subtitle }: SectionProps) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12">
          {subtitle && (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300/80 mb-3">
              {subtitle}
            </p>
          )}
          {title && (
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl text-white md:text-5xl"
            >
              {title}
            </motion.h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export default Section
