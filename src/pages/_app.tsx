import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/layout/Layout'
import Web3Provider from '@/components/providers/Web3Provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </Web3Provider>
  )
}
