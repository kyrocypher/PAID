import { useContractRead } from 'wagmi'
import { CONTRACT_ADDRESS } from '@/config/constants'
import { ABI } from '@/config/abi'

export function useStakedBalance(address: `0x${string}` | undefined) {
  const { data } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ABI,
    functionName: 'stakedBalance',
    args: address ? [address] : undefined,
    enabled: !!address,
  })

  return data
}
