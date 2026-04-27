import { Link, NavLink } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-ink py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-3">
          <div className="md:col-span-1 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300 text-ink transition-transform group-hover:rotate-12">
                <span className="font-display text-xl font-bold">NB</span>
              </div>
              <span className="font-display text-xl tracking-wider text-white">
                NEW BODY <span className="text-amber-300">SHAPE</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Ahmedabad's leading facility for technical bodybuilding and high-performance cross-training. Evolution starts here.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: Instagram, href: "https://www.instagram.com/newbodyshapegym/" },
                 { icon: Facebook, href: "#" },
                 { icon: Twitter, href: "#" }
               ].map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.href} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="h-10 w-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-500 hover:border-amber-300/50 hover:text-amber-300 transition-all hover:-translate-y-1"
                 >
                   <social.icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white">Explore</h4>
            <ul className="mt-8 space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-sm text-slate-400 hover:text-amber-300 transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white">Physical Hub</h4>
            <ul className="mt-8 space-y-6 text-sm text-slate-400">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-amber-300/50"><MapPin size={18} /></div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Nava Vadaj H.Q.</span>
                  <span>4th Floor, Sweni Complex, Nava Vadaj, Ahmedabad</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-amber-300/50"><Phone size={18} /></div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Contact Line</span>
                  <span>+91 97119 34923</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-amber-300/50"><Mail size={18} /></div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Support Email</span>
                  <span>newbodyshapegym@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            &copy; {currentYear} NEW BODY SHAPE GYM. AHMEDABAD'S CORE FITNESS HUB.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">
             <a href="#" className="hover:text-amber-300">Privacy Protocols</a>
             <a href="#" className="hover:text-amber-300">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] bg-amber-400/5 blur-[100px] pointer-events-none" />
    </footer>
  )
}

export default Footer
