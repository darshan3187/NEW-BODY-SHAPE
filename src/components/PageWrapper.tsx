import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative mx-auto max-w-6xl px-6 md:px-10 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
