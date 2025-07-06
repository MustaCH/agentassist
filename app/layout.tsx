import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" scroll-behavior="smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AgentAssist - AI-powered real estate assistant" />
        <meta name="keywords" content="AgentAssist, AI-powered, real estate, assistant" />
        <meta name="author" content="AgentAssist" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="google-site-verification" />
        <title>AgentAssist - AI-powered real estate assistant</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
