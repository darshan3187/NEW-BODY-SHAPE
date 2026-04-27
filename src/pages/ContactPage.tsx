import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import Section from '../components/Section'
import SEO from '../components/SEO'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}`
    window.open(`https://wa.me/919711934923?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '' })
  }

  return (
    <PageWrapper className="pt-32 md:pt-40">
      <SEO 
        title="Contact Us" 
        description="Get in touch with New Body Shape Gym in Ahmedabad. Visit our Nava Vadaj location or message us for membership inquiries." 
        canonical="/contact"
      />
      <Section subtitle="Start Your Evolution" title="Get In Touch">
        <div className="grid gap-20 mt-12 md:grid-cols-2 items-start">
          <div className="space-y-12">
            <p className="text-xl text-slate-400 leading-relaxed max-w-md">
              Whether you're a beginner looking for guidance or an athlete seeking elite coaching, we're here to help.
            </p>
            
            <div className="space-y-10">
               {[
                 { icon: Phone, label: "Hotline", value: "+91 97119 34923" },
                 { icon: Mail, label: "Support", value: "newbodyshapegym@gmail.com" },
                 { icon: MapPin, label: "H.Q. Address", value: "4th Floor, Sweni Complex, Nava Vadaj" },
               ].map((item) => (
                 <div key={item.label} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/5 text-amber-300 transition-colors group-hover:bg-amber-300 group-hover:text-ink">
                       <item.icon size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{item.label}</p>
                       <p className="text-xl font-display text-white tracking-wide">{item.value}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-10 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 font-display">Official Partners</h4>
                <div className="flex gap-8 opacity-30 grayscale filter invert">
                   <div className="font-display text-2xl">MATRIX</div>
                   <div className="font-display text-2xl">ROGUE</div>
                   <div className="font-display text-2xl">ELEIKO</div>
                </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 transition-opacity group-hover:opacity-20">
              <Send size={120} className="-rotate-12" />
            </div>
            <form onSubmit={handleFormSubmit} className="relative z-10 space-y-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleFormChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-slate-200 placeholder:text-slate-700 transition focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/20" placeholder="e.g. John Doe" />
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-slate-200 placeholder:text-slate-700 transition focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/20" placeholder="+91 XXXX XXX XXX" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-slate-200 placeholder:text-slate-700 transition focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/20" placeholder="johndoe@email.com" />
                </div>
              </div>
              <button type="submit" disabled={submitted} className={`flex items-center justify-center gap-3 w-full btn-primary py-6 ${submitted ? 'bg-green-600 text-white shadow-none' : ''}`}>
                {submitted ? 'Inquiry Sent Successfully!' : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-24 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
             <h3 className="font-display text-4xl text-white uppercase tracking-tight">Locate Our Facility</h3>
             <a 
               href="https://www.google.com/maps/search/?api=1&query=New+Body+Shape+Gym+Sweni+Complex+Nava+Vadaj+Ahmedabad"
               target="_blank"
               rel="noopener noreferrer"
               className="text-amber-300 hover:text-white transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2"
             >
               Open in Google Maps <MapPin size={14} />
             </a>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 p-2 backdrop-blur-md">
            <iframe 
              src="https://www.google.com/maps?q=New+Body+Shape+Gym+Ahmedabad&t=k&z=19&output=embed" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[2rem] opacity-90 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}

export default ContactPage
