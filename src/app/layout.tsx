'use client'

import Providers from '../util/provider'
import '../font.css'
import StyledComponentsRegistry from '../../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
