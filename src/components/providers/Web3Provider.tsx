import { WagmiConfig } from 'wagmi'
import { config } from '@/config/web3'
import { ReactNode } from 'react'

interface Web3ProviderProps {
  children: ReactNode
}

export default function Web3Provider({ children }: Web3ProviderProps) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
