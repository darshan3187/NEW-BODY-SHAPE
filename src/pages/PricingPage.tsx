import { motion } from 'framer-motion'
import { plans } from '../constants/data'
import { Check } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import Section from '../components/Section'
import SEO from '../components/SEO'

const PricingPage = () => {
  return (
    <PageWrapper className="pt-32 md:pt-40">
      <SEO 
        title="Membership & Pricing" 
        description="Affordable fitness plans in Ahmedabad. Starter, Performance, and Elite Coaching memberships at New Body Shape Gym." 
        canonical="/pricing"
      />
      <Section subtitle="Investment in Self" title="Flexible Membership">
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -12 }}
              className={`relative flex flex-col items-center rounded-[2.5rem] border p-10 text-center transition-all duration-300 ${
                plan.featured
                  ? 'border-amber-300 bg-amber-300/5 shadow-[0_0_60px_rgba(252,211,77,0.1)]'
                  : 'border-white/10 bg-zinc-900/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-300 px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-ink">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-4xl text-white uppercase tracking-tight">{plan.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black text-amber-200">{plan.price}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">{plan.period}</span>
              </div>
              
              <div className="my-10 h-px w-full bg-white/5" />

              <ul className="space-y-5 text-left w-full mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-slate-300">
                     <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-300/20 text-amber-300 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                     </div>
                     {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`mt-auto w-full rounded-full py-5 text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                plan.featured 
                  ? 'bg-amber-300 text-ink hover:bg-white shadow-[0_10px_30px_rgba(252,211,77,0.2)]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                Join Now
              </button>
            </motion.article>
          ))}
        </div>
      </Section>
      
      <div className="mt-20 text-center">
         <p className="text-slate-500 text-sm italic">
            * All memberships include a 1-day free trial. No hidden registration fees.
         </p>
      </div>
    </PageWrapper>
  )
}

export default PricingPage
