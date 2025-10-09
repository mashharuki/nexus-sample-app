import { cn } from '@/lib/utils'
import NexusContentWrapper from './blocks/nexus-content-wrapper'
import NexusBridge from './bridge/nexus-bridge'
import NexusBridgeAndExecute from './nexus-bridge-execute'
import NexusTransfer from './nexus-transfer'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import UnifiedBalance from './unified-balance'

const Nexus = ({ isTestnet }: { isTestnet: boolean }) => {
  console.log('isTestnet', isTestnet)
  return (
    <Card className="bg-foreground !shadow-[var(--ck-modal-box-shadow)] !rounded-[var(--ck-connectbutton-border-radius)] border-none mx-auto w-[95%] max-w-xl">
      <CardHeader className="flex flex-col w-full items-center">
        <CardTitle className="text-xl">Nexus Sample App</CardTitle>
        {isTestnet && (
          <CardDescription className="text-xs text-center">
            You are on Testnet.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="px-1 md:px-6">
        <NexusContentWrapper>
          <Tabs defaultValue="unified-balance">
            <TabsList
              className={cn(
                'grid w-full  shadow-[var(--ck-primary-button-box-shadow)]',
                isTestnet ? 'grid-cols-3' : 'grid-cols-4',
              )}
            >
              <TabsTrigger
                value="unified-balance"
                className="data-[state=active]:border-secondary/50 px-2"
              >
                Unified Balance
              </TabsTrigger>
              <TabsTrigger
                value="bridge"
                className="data-[state=active]:border-secondary/50 px-2"
              >
                Bridge
              </TabsTrigger>
              <TabsTrigger
                value="transfer"
                className=" data-[state=active]:border-secondary/50 px-2"
              >
                Transfer
              </TabsTrigger>
              {!isTestnet && (
                <TabsTrigger
                  value="bridge-execute"
                  className=" data-[state=active]:border-secondary/50 px-2"
                >
                  Bridge & Execute
                </TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="unified-balance">
              <UnifiedBalance />
            </TabsContent>
            <TabsContent value="bridge">
              <NexusBridge isTestnet={isTestnet} />
            </TabsContent>
            <TabsContent value="transfer">
              <NexusTransfer isTestnet={isTestnet} />
            </TabsContent>
            <TabsContent value="bridge-execute">
              <NexusBridgeAndExecute isTestnet={isTestnet} />
            </TabsContent>
          </Tabs>
        </NexusContentWrapper>
      </CardContent>
    </Card>
  )
}

export default Nexus
