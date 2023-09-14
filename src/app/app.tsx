'use client';
import { App } from 'konsta/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';

const queryClient = new QueryClient()

export default function MainApp({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <App theme="ios">
      <Provider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </App>
  )
}
