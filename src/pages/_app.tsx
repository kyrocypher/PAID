import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/layout/Layout'
import { WagmiConfig } from 'wagmi'
import { config } from '@/config/web3'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chains } from '@/config/web3'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
