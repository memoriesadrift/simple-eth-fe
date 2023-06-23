import { configureChains, createConfig, mainnet } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'

const connector = new MetaMaskConnector({
  chains: [mainnet],
})

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [connector],
  publicClient,
  webSocketPublicClient,
})
