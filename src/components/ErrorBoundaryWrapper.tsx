import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ComponentType, ReactNode, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { ErrorPageProps } from './ErrorPage'

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode
  fallbackComponent: ComponentType<ErrorPageProps>
  suspenseFallback: ReactNode
}

export default function ErrorBoundaryWrapper({
  children,
  fallbackComponent: FallbackComponent,
  suspenseFallback: SuspenseFallback,
}: ErrorBoundaryWrapperProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={FallbackComponent}>
          <Suspense fallback={SuspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
