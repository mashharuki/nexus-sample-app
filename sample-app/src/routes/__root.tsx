import Header from '@/components/common/header'
import Web3Provider from '@/providers/Web3Provider'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => {
    return (
      <Web3Provider>
        <Header />
        <Outlet />
      </Web3Provider>
    )
  },
})
