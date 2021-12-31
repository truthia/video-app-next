import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import { SCREEN } from '../variables'

const AppContainer= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:BLACK;
`

function MyApp({ Component, pageProps }: AppProps) {
  return <AppContainer>
      <Navbar />
      <Component {...pageProps} />
  </AppContainer>
}

export default MyApp
