export const metadata = {
  title: 'Agentic App',
  description: 'Autonomous application built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
