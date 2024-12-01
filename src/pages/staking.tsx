import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useStakedBalance } from '@/hooks/useStakedBalance'

export default function Staking() {
  const { address, isConnected } = useAccount()
  const balance = useStakedBalance(address)  // useStakedBalance returns bigint | undefined
  const [stakeAmount, setStakeAmount] = useState('')

  const handleStake = async () => {
    if (!isConnected || !stakeAmount) return
    // Add staking logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Staking</h1>
      
      {isConnected ? (
        <div>
          <p className="mb-4">Your staked balance: {balance?.toString() || '0'}</p>
          <input
            type="text"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            className="border rounded p-2 mr-4"
            placeholder="Amount to stake"
          />
          <button
            onClick={handleStake}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Stake
          </button>
        </div>
      ) : (
        <p>Please connect your wallet to stake</p>
      )}
    </div>
  )
}
