import { motion } from 'framer-motion'
import { ArrowRight, Clock3, ShieldCheck, Sparkles, Trophy } from 'lucide-react'
import { programs } from '../constants/data'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import Section from '../components/Section'
import SEO from '../components/SEO'

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-glow', { scale: 0.9, opacity: 0.35 }, { scale: 1.12, opacity: 0.6, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.fromTo('.hero-chip', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.25 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <PageWrapper className="pt-0 md:pt-0 overflow-hidden">
      <SEO 
        title="Best Gym in Ahmedabad | Fitness Evolution" 
        description="Transform your physique at New Body Shape Gym, Ahmedabad's premier destination for strength training, functional cardio, and expert coaching." 
      />
      <header className="relative isolate min-h-[85vh] pt-32 md:pt-40" ref={heroRef}>
        <div className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-[45rem] w-[45rem] -translate-x-1/2 rounded-full bg-amber-400/20 blur-[130px]" />
        
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
              <Sparkles size={14} className="animate-pulse" /> Precision Fitness
            </p>
            <h1 className="font-display text-4xl leading-[0.95] text-white sm:text-7xl lg:text-9xl">
              BUILD YOUR <br/>
              <span className="text-gradient">EVOLUTION</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-slate-400 leading-relaxed md:text-xl">
              From metabolic conditioning to absolute strength cycles. Join Ahmedabad's most elite technical training facility.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link to="/pricing" className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn-outline">
                Explore Classes
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {[
              { label: 'Active Members', value: '1,800+' },
              { label: 'Pro Coaches', value: '12' },
              { label: 'Weekly Slots', value: '65+' },
              { label: 'User Rating', value: '4.9' },
            ].map((item) => (
              <div key={item.label} className="hero-chip glass-card p-5 md:p-8">
                <div className="font-display text-3xl text-amber-300 md:text-5xl">{item.value}</div>
                <div className="mt-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <Section subtitle="World Class Training" title="Specialized Programs">
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, idx) => (
            <motion.article 
              key={program.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group"
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/5 text-amber-300 transition-transform group-hover:scale-110 group-hover:bg-amber-300 group-hover:text-ink">
                <program.icon size={32} />
              </div>
              <h3 className="font-display text-3xl text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight">{program.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{program.detail}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden rounded-[2rem] border border-amber-300/30 bg-gradient-to-br from-amber-300/10 to-transparent p-10 md:p-20">
        <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl text-white md:text-6xl uppercase leading-none">2026 SEASONAL PASS</h2>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              New Body Shape Gym is giving exclusive access to our peak performance labs at special rates. Valid for first 50 signups.
            </p>
          </div>
          <Link to="/contact" className="btn-primary px-8 md:px-12 py-4 md:py-6 text-sm md:text-lg whitespace-nowrap">Secure Your Spot</Link>
        </div>
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />
      </section>

      <Section subtitle="Why Choose Us" title="Peak Performance Hub">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            { icon: Trophy, title: "Elite Physique", copy: 'Scientific muscle building protocols for all fitness levels.' },
            { icon: Clock3, title: "Flexible Cycles", copy: 'Morning and evening slots to fit your professional life.' },
            { icon: ShieldCheck, title: 'Safe Environment', copy: 'Certified equipment and strictly professional atmosphere.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-8">
              <div className="h-12 w-12 rounded-xl bg-amber-300/10 flex items-center justify-center text-amber-300 mb-6">
                <item.icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}

export default HomePage
