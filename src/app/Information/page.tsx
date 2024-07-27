import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { fetchMeetings } from '../../features/Meetings/useMeetings'
import Main from '../../containers/Main/Main'

export default async function InformationPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['meetings'],
    queryFn: fetchMeetings,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
    </HydrationBoundary>
  )
}
