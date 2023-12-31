import ReactGA from 'react-ga4';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../../components/common-components/google-analytics';
import CookieBanner from '../../components/common-components/cookie-banner';
import { getDetails } from '../../lib/utils';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Le Jardin',
  description: "Get a Free Item upon signingUp for the Baker's Club. Offer Valid till 31 december, 2023",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const TRACKING_ID = "G-6FJPMYFVJ6";
  ReactGA.initialize(TRACKING_ID);
  const {content, data} = getDetails(`privacy_policy.md`)
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID={TRACKING_ID} />
      <body className={inter.className}>
        {children}
        <CookieBanner heading={data.heading} content={content}/>
      </body>
    </html>
  )
}
