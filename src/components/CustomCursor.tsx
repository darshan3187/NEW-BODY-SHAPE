import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { Dumbbell } from 'lucide-react'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isEnabled, setIsEnabled] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false
    }

    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })

  const mouseX = useSpring(0, { stiffness: 800, damping: 40 })
  const mouseY = useSpring(0, { stiffness: 800, damping: 40 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const handleChange = (event: MediaQueryListEvent) => setIsEnabled(event.matches)

    setIsEnabled(mediaQuery.matches)

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    let animationFrame = 0
    let nextX = 0
    let nextY = 0

    const updatePosition = () => {
      mouseX.set(nextX)
      mouseY.set(nextY)
      animationFrame = 0
    }

    const handlePointerMove = (e: PointerEvent) => {
      nextX = e.clientX
      nextY = e.clientY

      if (animationFrame !== 0) return
      animationFrame = window.requestAnimationFrame(updatePosition)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .glass-card, input, textarea')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [isEnabled, mouseX, mouseY])

  if (!isEnabled) {
    return null
  }

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block">
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="relative flex items-center justify-center"
      >
        {/* Subtle glow (no border/outline) */}
        <motion.div 
          animate={{
            opacity: isHovering ? 0.35 : 0,
            scale: isHovering ? 1.2 : 0.8,
          }}
          className="absolute h-8 w-8 rounded-full bg-amber-300 blur-lg"
        />

        {/* Pure Dumbbell Icon */}
        <motion.div
          animate={{
            rotate: isClicked ? 45 : isHovering ? 15 : 0,
            scale: isClicked ? 0.85 : isHovering ? 1.3 : 1,
            color: isHovering ? '#fcd34d' : '#ffffff',
          }}
          className="text-white drop-shadow-[0_2px_10px_rgba(252,211,77,0.2)]"
        >
          <Dumbbell size={24} strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CustomCursor
