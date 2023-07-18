import './globals.css'

export const metadata = {
  title: 'Age Calculator with Next JS and Tailwind | Yoga723',
  description: 'Calculate how long you have been lived in this world based on your birthday date.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
