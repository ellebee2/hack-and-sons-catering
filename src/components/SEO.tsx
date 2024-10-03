import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
}

export const SEO: React.FC<SEOProps> = ({
  title = "Hack & Sons Private Catering",
  description = "Exclusive private dining and catering services in Nashville",
  canonicalUrl = process.env.NEXT_PUBLIC_SITE_URL,
  ogImage = `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}