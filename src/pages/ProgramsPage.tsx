import { motion } from 'framer-motion'
import { programs } from '../constants/data'
import PageWrapper from '../components/PageWrapper'
import Section from '../components/Section'
import SEO from '../components/SEO'

const ProgramsPage = () => {
  return (
    <PageWrapper className="pt-32 md:pt-40">
      <SEO 
        title="Training Programs" 
        description="Explore our specialized gym programs including Weightlifting, Functional Cardio, Muscle Targeting, and CrossFit in Ahmedabad." 
        canonical="/programs"
      />
      <Section subtitle="High Tech Training" title="Curated Programs">
        <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
          From absolute beginners to competitive athletes, our program track is designed to scale with your progress. 
          Select a discipline and begin your journey.
        </p>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {programs.map((program, idx) => (
            <motion.div 
               key={program.title} 
               initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-card p-10 flex flex-col md:flex-row gap-10 items-start hover:border-amber-300/50"
            >
              <div className="flex-shrink-0 p-6 rounded-[2rem] bg-amber-300 text-ink shadow-[0_0_30px_rgba(252,211,77,0.2)]">
                <program.icon size={40} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-display text-4xl text-white tracking-tight uppercase">{program.title}</h3>
                <p className="mt-4 text-slate-400 leading-relaxed text-lg">{program.detail}</p>
                <div className="mt-8 flex gap-4">
                   <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">60 Min Sessions</div>
                   <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">All Levels</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="mt-24 glass-card p-12 md:p-20 text-center relative overflow-hidden">
         <div className="relative z-10">
            <h2 className="font-display text-5xl text-white mb-6">NOT SURE WHERE TO START?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
               Our head coaches offer a free 15-minute consultation to find the right program for your specific body type and goals.
            </p>
            <a href="/contact" className="btn-primary">Book Consultation</a>
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-amber-300/5 to-transparent pointer-events-none" />
      </section>
    </PageWrapper>
  )
}

export default ProgramsPage
