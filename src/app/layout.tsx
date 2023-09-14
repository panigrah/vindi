'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { App } from 'konsta/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
      <App theme="ios">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </App>
      </body>
    </html>
    
  )
}
