export type SEO = {
  title: string
  robots: {
    index: boolean
    follow: boolean
  }
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_description: string
  og_url: string
  og_site_name: string
  og_image: {
    width: number
    height: number
    url: string
    type: string
  }
  article_publisher: string
  article_published_time: Date
  article_modified_time: Date
  author: string
  twitter_card: string
  twitter_misc: {
    'Written By': string
    'Est. Reading Time': string
  }
  schema: Record<string, any>
}