import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Menu, X, Youtube } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let animationFrame = 0

    const updateScrolledState = () => {
      const nextIsScrolled = window.scrollY > 20
      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled ? currentIsScrolled : nextIsScrolled,
      )
      animationFrame = 0
    }

    const handleScroll = () => {
      if (animationFrame !== 0) return
      animationFrame = window.requestAnimationFrame(updateScrolledState)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled ? 'bg-[#080a0f]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300 text-ink shadow-[0_0_15px_rgba(252,211,77,0.3)]">
              <span className="font-display text-xl font-black">NB</span>
            </div>
            <span className="font-display text-xl tracking-tighter text-white">
              NEW BODY <span className="text-amber-300">SHAPE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-amber-300 ${
                    isActive ? 'text-amber-300' : 'text-slate-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlap Fix */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#080a0f] flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-8 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300 text-ink">
                  <span className="font-display text-xl font-black">NB</span>
                </div>
                <span className="font-display text-xl tracking-tight text-white uppercase">
                  NEW BODY <span className="text-amber-300">SHAPE</span>
                </span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col justify-center gap-8 px-10 py-20 flex-grow">
              <p className="text-amber-300 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Navigate</p>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-5xl font-display uppercase tracking-tight transition-all ${
                      isActive ? 'text-amber-300' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="p-10 border-t border-white/5 flex gap-6 text-amber-300">
              <Instagram size={24} />
              <Youtube size={24} />
              <Facebook size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
