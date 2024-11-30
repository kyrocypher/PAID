import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useStakedBalance } from '@/hooks/useStakedBalance'

export default function Staking() {
  const { isConnected } = useAccount()
  const { stakedBalance } = useStakedBalance()
  const [stakeAmount, setStakeAmount] = useState('')

  const handleStake = async () => {
    // Implement staking logic
  }

  const handleUnstake = async () => {
    // Implement unstaking logic
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Staking</h1>

      {!isConnected ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-600">Connect your wallet to start staking</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Your Staking</h2>
            <div className="mb-4">
              <p className="text-gray-600">Staked Balance</p>
              <p className="text-2xl font-bold">{stakedBalance} $PAID</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amount to Stake
                </label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.0"
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleStake}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Stake
                </button>
                <button
                  onClick={handleUnstake}
                  className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Unstake
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Staking Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">APY</p>
                <p className="text-2xl font-bold">12.5%</p>
              </div>
              <div>
                <p className="text-gray-600">Total Value Locked</p>
                <p className="text-2xl font-bold">1,234,567 $PAID</p>
              </div>
              <div>
                <p className="text-gray-600">Your Share</p>
                <p className="text-2xl font-bold">0.05%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
