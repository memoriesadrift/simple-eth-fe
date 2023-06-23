import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from './utils/wagmiConfig.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
)
