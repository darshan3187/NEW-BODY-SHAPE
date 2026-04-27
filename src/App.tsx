import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundGrid from './components/BackgroundGrid'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

// Code Splitting for Performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const PageLoader = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-amber-300 border-t-transparent" />
  </div>
)

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {/* Schema.org for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HealthAndBeautyBusiness',
            name: 'New Body Shape Gym',
            description: 'Ahmedabad\'s most elite training facility. Strength, cardio, and expertise.',
            url: 'https://newbodyshapegym.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '4th Floor, Sweni Complex',
              addressLocality: 'Nava Vadaj',
              addressRegion: 'Ahmedabad'
            }
          }),
        }}
      />

      <div className="min-h-screen bg-ink text-slate-100 flex flex-col relative font-sans">
        <CustomCursor />
        <ScrollProgress />
        <BackgroundGrid />
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
      <Analytics />
    </>
  )
}

export default App
