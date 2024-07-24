import Providers from '../util/provider'
import '../font.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
