import { NexusProvider } from '@avail-project/nexus-widgets'
import { WagmiProvider } from 'wagmi'
import {
  arbitrumSepolia,
  baseSepolia,
  optimismSepolia,
  polygonAmoy,
  sepolia
} from 'wagmi/chains'

import type { NexusNetwork } from '@avail-project/nexus-widgets'
import {
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createContext, useContext, useMemo, useState } from 'react'

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const defaultNetwork = (import.meta.env.VITE_NETWORK ?? 'mainnet') as NexusNetwork

const config = getDefaultConfig({
  appName: 'Nexus Sample App',
  projectId: walletConnectProjectId!,
  chains: [
    sepolia,
    baseSepolia,
    arbitrumSepolia,
    optimismSepolia,
    polygonAmoy,
  ],
})
const queryClient = new QueryClient()

interface Web3ContextValue {
  network: NexusNetwork
  setNetwork: React.Dispatch<React.SetStateAction<NexusNetwork>>
}

const Web3Context = createContext<Web3ContextValue | null>(null)

export function useWeb3Context() {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error('useWeb3Context must be used within a NexusProvider')
  }
  return context
}

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [network, setNetwork] = useState<NexusNetwork>(defaultNetwork)
  const value = useMemo(() => ({ network, setNetwork }), [network])

  return (
    <Web3Context.Provider value={value}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            modalSize="compact"
            theme={lightTheme({
              accentColor: '#fe8b6c',
              accentColorForeground: 'white',
            })}
          >
            <NexusProvider
              config={{
                debug: true,
                network,
              }}
            >
              {children}
            </NexusProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Web3Context.Provider>
  )
}

export default Web3Provider
