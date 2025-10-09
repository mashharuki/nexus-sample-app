import {
  SUPPORTED_CHAINS_IDS,
  SUPPORTED_TOKENS,
} from '@avail-project/nexus-core'

type TokenAddressMap = {
  [key in SUPPORTED_TOKENS]?: string
}

type ChainAddressMap = {
  [key in SUPPORTED_CHAINS_IDS]?: TokenAddressMap
}

const tokenAddresses: ChainAddressMap = {
  8453: {
    // Base
    USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  },
  11155111: {
    // Sepolia
    USDC: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
    USDT: '0x3a9d53fE2fD8cD2dA4FfDc5aE8C520C0dA895E7A',
  },
}

type ProtocolContracts = {
  [key: string]: {
    [key in SUPPORTED_CHAINS_IDS]?: { [key: string]: string }
  }
}

export const protocolContracts: ProtocolContracts = {
  aave: {
    8453: {
      // Base
      POOL: '0xA238Dd80C259a72e81d7e4664a9801593F98d1c5',
    },
    11155111: {
      // Sepolia
      POOL: '0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951',
    }
  },
}

export const getTokenAddress = (
  token: SUPPORTED_TOKENS,
  chainId: SUPPORTED_CHAINS_IDS,
): string | undefined => {
  if (token === 'ETH') {
    return undefined
  }
  return tokenAddresses[chainId]?.[token]
}

export const getTokenDecimals = (token: SUPPORTED_TOKENS): number => {
  switch (token) {
    case 'ETH':
      return 18
    case 'USDC':
    case 'USDT':
      return 6
    default:
      return 18 // Default to 18 decimals for unknown tokens
  }
}
