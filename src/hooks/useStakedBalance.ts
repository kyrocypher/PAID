import { useContractRead } from 'wagmi'
import { CONTRACT_ADDRESS } from '@/config/constants'
import { ABI } from '@/config/abi'

export function useStakedBalance(address: string | undefined) {
  const { data } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`, // Type assertion here
    abi: ABI,
    functionName: 'stakedBalance',
    args: [address],
  })

  return data
}
