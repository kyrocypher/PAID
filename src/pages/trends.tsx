import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useStakedBalance } from '@/hooks/useStakedBalance'

export default function Trends() {
  const { address, isConnected } = useAccount()
  const balance = useStakedBalance(address)  // useStakedBalance returns bigint | undefined
  const [activeTab, setActiveTab] = useState('public')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trends</h1>
      
      {isConnected ? (
        <div>
          <p className="mb-4">Your staked balance: {balance?.toString() || '0'}</p>
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('public')}
              className={`px-4 py-2 rounded ${
                activeTab === 'public' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Public
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-4 py-2 rounded ${
                activeTab === 'private' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Private
            </button>
          </div>
          {/* Add trend content here */}
        </div>
      ) : (
        <p>Please connect your wallet to view trends</p>
      )}
    </div>
  )
}
