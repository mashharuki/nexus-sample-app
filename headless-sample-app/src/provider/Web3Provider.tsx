'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { useEffect, useState } from 'react'
import { WagmiProvider, createConfig, http, useAccount } from 'wagmi'
import {
  arbitrumSepolia,
  baseSepolia,
  optimismSepolia,
  polygonAmoy,
} from 'wagmi/chains'
import { NexusProvider } from './NexusProvider'

const config = createConfig(
  getDefaultConfig({
    chains: [baseSepolia, arbitrumSepolia, optimismSepolia, polygonAmoy],
    transports: {
      [baseSepolia.id]: http(baseSepolia.rpcUrls.default.http[0]),
      [arbitrumSepolia.id]: http(arbitrumSepolia.rpcUrls.default.http[0]),
      [optimismSepolia.id]: http(optimismSepolia.rpcUrls.default.http[0]),
      [polygonAmoy.id]: http(polygonAmoy.rpcUrls.default.http[0]),
    },

    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: 'Nexus Sample App',
    // Optional App Info
    appDescription: 'Nexus Sample App',
    appUrl: 'https://www.availproject.org/',
    appIcon:
      'https://www.availproject.org/_next/static/media/avail_logo.9c818c5a.png',
  }),
)

const queryClient = new QueryClient()

/**
 * InternalProvider コンポーネント
 * @param param0
 * @returns
 */
const InternalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false)
  const { isConnected: accountConnected } = useAccount()

  useEffect(() => {
    setIsConnected(accountConnected)
  }, [accountConnected])

  const handleConnection = () => {
    setIsConnected(true)
  }

  const handleDisconnection = () => {
    setIsConnected(false)
  }

  return (
    <ConnectKitProvider
      theme="retro"
      onConnect={handleConnection}
      onDisconnect={handleDisconnection}
    >
      <NexusProvider isConnected={isConnected}>{children}</NexusProvider>
    </ConnectKitProvider>
  )
}

/**
 * Web3Provider コンポーネント
 * @param param0
 * @returns
 */
export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <InternalProvider>{children}</InternalProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
