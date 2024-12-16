import Providers from '../util/provider'
import '../font.css'
import StyledComponentsRegistry from '../../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components/Organisms/Header/Header'
import Footer from '../components/Organisms/Footer/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>F1 INFO</title>
        <meta
          name="description"
          content="Get Formula 1 rankings, driver profiles, and team standings. Explore detailed stats, race results, and all the latest updates about your favorite F1 drivers and teams."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="F1 INFO" />
        <meta
          property="og:description"
          content="Get Formula 1 rankings, driver profiles, and team standings. Explore detailed stats, race results, and all the latest updates about your favorite F1 drivers and teams."
        />
        <meta property="og:image" content="/Images/og-image.jpeg" />
        <meta property="og:url" content="https://formulaoneinfo.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="Images/favicon.png" />
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
