import {
  Anchor,
  Box,
  Button,
  Grommet,
  Header,
  Heading,
  Nav,
  Page,
  PageContent,
  Text,
  grommet,
} from 'grommet'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function App() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
      <Grommet theme={grommet} full>
        <Header background={'dark-1'} pad={'small'}>
          <Box direction="row" align="center" gap="small">
            <Anchor color={'white'} href="#">
              Simple Eth FE
            </Anchor>
          </Box>
          <Nav direction="row">
            <Button
              label={isConnected ? 'Disconnect' : 'Connect Wallet' }
              onClick={() => (isConnected ? disconnect() : connect())}
            />
          </Nav>
        </Header>
        <Page kind={'narrow'}>
          <PageContent>
            <Heading>Simple Eth FE</Heading>
            {address != null && isConnected && (
              <Text>{`Your wallet address: ${address}`}</Text>
            )}
          </PageContent>
        </Page>
      </Grommet>
  )
}

export default App
