import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type WrappedComponentProps = {
  children: ReactNode
}

export function WrappedComponent({ children }: WrappedComponentProps) {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
