import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  canonical?: string
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  const siteTitle = "New Body Shape Gym"
  const fullTitle = `${title} | ${siteTitle}`
  const defaultDesc = "Join New Body Shape Gym in Ahmedabad for professional strength training and expert coaching."

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {canonical && <link rel="canonical" href={`https://newbodyshapegym.com${canonical}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
    </Helmet>
  )
}

export default SEO
