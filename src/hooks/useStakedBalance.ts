import { useState, useEffect } from 'react'
import { useAccount, useContractRead } from 'wagmi'
import { CONTRACT_ADDRESS } from '@/config/constants'

const ABI = [
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'stakedBalance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]

export function useStakedBalance() {
  const { address } = useAccount()
  const [stakedBalance, setStakedBalance] = useState('0')

  const { data } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: 'stakedBalance',
    args: [address],
    watch: true,
  })

  useEffect(() => {
    if (data) {
      setStakedBalance(data.toString())
    }
  }, [data])

  return { stakedBalance }
}
