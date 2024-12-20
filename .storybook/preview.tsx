import React from 'react'
import type { Preview } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { handlers } from '../src/mocks/handlers'

// MSW 초기화
initialize()

const queryClient = new QueryClient()

const withQueryClient = (Story: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers, // 글로벌 MSW 핸들러 등록
    },
  },
  decorators: [
    mswDecorator, // MSW 데코레이터 추가
    withQueryClient, // QueryClientProvider 데코레이터 추가
  ],
}

export default preview
