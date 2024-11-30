import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useStakedBalance } from '@/hooks/useStakedBalance'

export default function Trends() {
  const { isConnected } = useAccount()
  const { stakedBalance } = useStakedBalance()
  const [activeTab, setActiveTab] = useState('public')

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Market Trends</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('public')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'public'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Public Data
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'premium'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Premium Insights
          </button>
        </div>

        {activeTab === 'premium' && !isConnected && (
          <div className="text-center py-10">
            <p className="text-gray-600">
              Connect your wallet to access premium insights
            </p>
          </div>
        )}

        {/* Add trend charts and data here */}
      </div>
    </div>
  )
}
