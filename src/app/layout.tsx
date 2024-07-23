export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preload"
                    href="/path/to/Formula1-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/path/to/Formula1-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/path/to/Formula1-Black.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/path/to/Formula1-Wide.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <title>My App</title>
                <meta name="description" content="My App is a..." />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}
