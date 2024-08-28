'use client'

import Providers from '../util/provider'
import '../font.css'
import StyledComponentsRegistry from '../../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components/Molecule/Header/Header'
import Footer from '../components/Molecule/Footer/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>F1 INFO</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
