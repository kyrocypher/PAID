import { configureChains, createConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains: configuredChains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
)

export const chains = configuredChains

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains: configuredChains }),
    new WalletConnectConnector({
      chains: configuredChains,
      options: {
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
        metadata: {
          name: 'PAID Dashboard',
          description: 'PAID Web3 Dashboard',
          url: typeof window !== 'undefined' ? window.location.origin : '',
          icons: [],
        },
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})
