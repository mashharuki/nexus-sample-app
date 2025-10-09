import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AAVE_LENDING_POOL_ADDRESS_PROVIDER, AAVE_PROTOCOL_DATA_PROVIDER } from '@/lib/utils'
import { AAVE_SUPPLY_DETAILED_ABI, AAVE_SUPPLY_MINIMAL_ABI } from '@/lib/web3/abi'
import {
  BridgeAndExecuteButton,
  BridgeButton,
  SUPPORTED_CHAINS,
  TOKEN_CONTRACT_ADDRESSES,
  TOKEN_METADATA,
  TransferButton,
  useNexus
} from '@avail-project/nexus-widgets'
import { useState } from 'react'
import { parseUnits } from 'viem'

const Nexus = () => {
  const { initializeSdk, isSdkInitialized } = useNexus()
  const [loading, setLoading] = useState(false)

  const handleInitializeSDK = async () => {
    if (isSdkInitialized) return
    setLoading(true)
    try {
      await initializeSdk()
    } catch (error) {
      console.error('Unable to initialize SDK:', error)
    } finally {
      setLoading(false)
    }
  }

  const widgetButtonClick = async (onClick: () => void) => {
    if (!isSdkInitialized) {
      await handleInitializeSDK()
    }
    onClick()
  }

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="w-full flex items-center gap-x-4">
            <div className="bg-card rounded-lg border border-gray-400 p-6 shadow-sm text-center w-1/2">
              <h3 className="text-lg font-semibold mb-4">Bridge Tokens</h3>
              <BridgeButton>
                {({ onClick, isLoading }) => (
                  <Button
                    onClick={() => widgetButtonClick(onClick)}
                    disabled={isLoading || loading}
                    className="w-full font-bold rounded-lg"
                  >
                    {loading
                      ? 'Initializing...'
                      : isLoading
                        ? 'Loading...'
                        : 'Open Bridge'}
                  </Button>
                )}
              </BridgeButton>
            </div>
            <div className="bg-card rounded-lg border border-gray-400 p-6 shadow-sm text-center w-1/2">
              <h3 className="text-lg font-semibold mb-4">Transfer Tokens</h3>
              <TransferButton
                prefill={{ 
                  chainId: 84532,       
                  token: 'USDC', 
                  amount: '0.1',
                  recipient: '0x742d35Cc6634C0532925a3b8D4C9db96c4b4Db45'
                }}
              >
                {({ onClick, isLoading }) => (
                  <Button
                    onClick={() => widgetButtonClick(onClick)}
                    disabled={isLoading || loading}
                    className="w-full font-bold rounded-lg"
                  >
                    {loading
                      ? 'Initializing...'
                      : isLoading
                        ? 'Loading...'
                        : 'Open Transfer'}
                  </Button>
                )}
              </TransferButton>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-4">
            <div
              className="bg-card rounded-lg border border-gray-400 p-6 shadow-sm text-center w-3/4"
              key={'usdt-aave'}
            >
              <h3 className="text-lg font-semibold mb-4">
                Bridge & Supply USDT on AAVE
              </h3>
              <BridgeAndExecuteButton
                contractAddress={AAVE_LENDING_POOL_ADDRESS_PROVIDER}
                contractAbi={AAVE_SUPPLY_MINIMAL_ABI}
                functionName="supply"
                buildFunctionParams={(token, amount, _chainId, user) => {
                  const decimals = TOKEN_METADATA[token].decimals
                  const amountWei = parseUnits(amount, decimals)
                  const tokenAddr = TOKEN_CONTRACT_ADDRESSES[token][_chainId]
                  return { functionParams: [tokenAddr, amountWei, user, 0] }
                }}
                prefill={{
                  toChainId: SUPPORTED_CHAINS.ARBITRUM,
                  token: 'USDT',
                }}
              >
                {({ onClick, isLoading }) => (
                  <Button
                    onClick={() => widgetButtonClick(onClick)}
                    disabled={isLoading || loading}
                    className="w-full font-bold rounded-lg"
                  >
                    {loading
                      ? 'Initializing...'
                      : isLoading
                        ? 'Processing…'
                        : 'Bridge & Stake'}
                  </Button>
                )}
              </BridgeAndExecuteButton>
            </div>
            <div
              className="bg-card rounded-lg border border-gray-400 p-6 shadow-sm text-center w-3/4"
              key={'usdc-aave'}
            >
              <h3 className="text-lg font-semibold mb-4">
                Bridge & Supply USDC on AAVE
              </h3>
              <BridgeAndExecuteButton
                contractAddress={AAVE_PROTOCOL_DATA_PROVIDER}
                contractAbi={AAVE_SUPPLY_DETAILED_ABI}
                functionName="supply"
                buildFunctionParams={(token, amount, _chainId, user) => {
                  const decimals = TOKEN_METADATA[token].decimals
                  const amountWei = parseUnits(amount, decimals)
                  const tokenAddr = TOKEN_CONTRACT_ADDRESSES[token][_chainId]
                  return { functionParams: [tokenAddr, amountWei, user, 0] }
                }}
                prefill={{
                  toChainId: SUPPORTED_CHAINS.SEPOLIA,
                  token: 'USDC',
                }}
              >
                {({ onClick, isLoading }) => (
                  <Button
                    onClick={() => widgetButtonClick(onClick)}
                    disabled={isLoading || loading}
                    className="w-full font-bold rounded-lg"
                  >
                    {loading
                      ? 'Initializing...'
                      : isLoading
                        ? 'Processing…'
                        : 'Bridge & Stake'}
                  </Button>
                )}
              </BridgeAndExecuteButton>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Nexus
