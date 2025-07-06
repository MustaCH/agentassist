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
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AgentAssist - AI-powered real estate assistant" />
        <meta name="keywords" content="AgentAssist, AI-powered, real estate, assistant" />
        <meta name="author" content="AgentAssist" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#2b7fff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="google-site-verification" />
        <link rel="canonical" href="https://agentassist.ai/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Open Graph */}
        <meta property="og:title" content="AgentAssist - AI-powered real estate assistant" />
        <meta property="og:description" content="Automate your real estate workflow with AI. Book a demo now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agentassist.ai/" />
        <meta property="og:image" content="https://agentassist.ai/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AgentAssist - AI-powered real estate assistant" />
        <meta name="twitter:description" content="Automate your real estate workflow with AI. Book a demo now!" />
        <meta name="twitter:image" content="https://agentassist.ai/og-image.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"WebSite\",
          \"name\": \"AgentAssist\",
          \"url\": \"https://agentassist.ai/\",
          \"description\": \"AI-powered real estate assistant\"
        }` }} />

        <title>AgentAssist - AI-powered real estate assistant</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
