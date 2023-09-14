import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import MainApp from './app'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html>
        <ClerkProvider>
          <body>
            <MainApp>
              {children}
            </MainApp>
          </body>
        </ClerkProvider>

      </html>
  )
}
