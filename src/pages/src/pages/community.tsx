import { useState } from 'react'
import { useAccount } from 'wagmi'
import ChatInterface from '@/components/community/ChatInterface'
import CommunityFeatures from '@/components/community/CommunityFeatures'

export default function Community() {
  const { isConnected } = useAccount()
  const [activeTab, setActiveTab] = useState('chat')

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Community</h1>

      {!isConnected ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-600">Connect your wallet to join the community</p>
        </div>
      ) : (
        <>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'chat'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'features'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Features
            </button>
          </div>

          {activeTab === 'chat' ? <ChatInterface /> : <CommunityFeatures />}
        </>
      )}
    </div>
  )
}
