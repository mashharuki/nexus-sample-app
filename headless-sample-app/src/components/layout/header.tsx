import Image from 'next/image'
import Link from 'next/link'
import ConnectWallet from '../blocks/connect-wallet'

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="w-full px-6 flex items-center justify-between py-4">
        <Link href="/">
          <Image src="/avail-logo.svg" alt="Nexus" width={120} height={40} />
        </Link>
        <ConnectWallet />
      </div>
    </header>
  )
}

export default Header
