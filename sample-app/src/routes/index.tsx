import WalletConnection from '@/components/common/connect-wallet'
import Nexus from '@/components/nexus/nexus'
import ViewUnifiedBalance from '@/components/nexus/view-balance'
import { createFileRoute } from '@tanstack/react-router'
import { Activity } from 'lucide-react'
import { useAccount } from 'wagmi'

export const Route = createFileRoute('/')({
  component: App,
})

/**
 * App Component
 * @returns 
 */
function App() {
  const { status } = useAccount()

  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Nexus Sample App</h1>
        </div>

        {status === 'connected' && (
          <div className="flex items-center flex-col gap-y-2">
            <ViewUnifiedBalance />
            <Nexus />
          </div>
        )}

        <div className="text-center">
          {status === 'disconnected' && (
            <Activity className="animate-pulse mx-auto" />
          )}
          <WalletConnection />
        </div>
      </div>
    </div>
  )
}
