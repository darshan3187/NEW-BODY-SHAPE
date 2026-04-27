import { locations, trainers } from '../constants/data'
import PageWrapper from '../components/PageWrapper'
import Section from '../components/Section'
import SEO from '../components/SEO'

const AboutPage = () => {
  return (
    <PageWrapper className="pt-32 md:pt-40">
      <SEO 
        title="About Our Center" 
        description="Learn about New Body Shape Gym's mission to provide professional coaching and modern fitness equipment in Ahmedabad." 
        canonical="/about"
      />
      <Section subtitle="Building Legacies" title="Who We Are">
        <div className="grid gap-16 md:grid-cols-2 mt-12 items-center">
          <div>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              New Body Shape Gym is Ahmedabad's premier fitness institution. We don't just provide equipment; we provide a blueprint for transformation.
            </p>
            <p className="mt-8 text-slate-400 leading-relaxed">
              Founded on the principles of discipline and technical excellence, we cater to individuals who are serious about their fitness evolution. Our facility is equipped with top-tier machinery and led by coaches who understand the science of performance.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card p-8 border-amber-300/20">
                <div className="text-5xl font-display text-amber-300">2018</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Established</div>
              </div>
              <div className="glass-card p-8 border-amber-300/20">
                <div className="text-5xl font-display text-amber-300">PRO</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Certified Equipment</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300/60 mb-6">Our Locations</h3>
             {locations.map((loc) => (
                <div key={loc.area} className="glass-card p-6 flex flex-col gap-1">
                   <h4 className="font-display text-2xl text-white tracking-wide">{loc.area}</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">{loc.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </Section>

      <Section subtitle="Meet the Masters" title="Expert Coaching Staff">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group relative overflow-hidden rounded-3xl">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                loading="lazy"
                decoding="async"
                className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                 <h3 className="font-display text-3xl text-white">{trainer.name}</h3>
                 <p className="text-sm uppercase tracking-widest text-amber-300 mt-1">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}

export default AboutPage
