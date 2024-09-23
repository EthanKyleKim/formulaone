'use client'

import ErrorBoundaryWrapper from '../../ErrorBoundaryWrapper'
import ErrorPage from '../../ErrorPage'
import CardWithHeader from '../../Molecules/CardWithHeader/CardWithHeader'
import SkeletonList from '../../Molecules/SkeletonList/SkeletonList'
import SessionsList from '../../Organisms/SessionsList/SessionsList'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import Meeting from '../../Organisms/Meeting/Meeting'
import { Container } from './Main.styled'
import ProfileCardList from '../../Organisms/ProfileCardList/ProfileCardList'
import SkeletonProfilesList from '../../Organisms/SkeletonProfileCardList/SkeletonProfileCardList'

export default function Main() {
  const {
    meetingState: { countryName },
  } = useSliceMergeStore()

  const {
    sessionState: { session_key, meeting_key },
  } = useSliceMergeStore()

  return (
    <Container>
      <CardWithHeader headerText="2024 F1 GP 일정" width="21vw" height="93vh">
        <ErrorBoundaryWrapper
          fallbackComponent={ErrorPage}
          suspenseFallback={<SkeletonList count={10} flexDirection="column" height="80px" />}
        >
          <Meeting />
        </ErrorBoundaryWrapper>
      </CardWithHeader>
      <CardWithHeader headerText="세션 정보" width="75vw" height="93vh">
        <ErrorBoundaryWrapper
          fallbackComponent={ErrorPage}
          suspenseFallback={<SkeletonList count={5} flexDirection="row" width="100%" height="30px" />}
        >
          {countryName && <SessionsList />}
        </ErrorBoundaryWrapper>
        <ErrorBoundaryWrapper fallbackComponent={ErrorPage} suspenseFallback={<SkeletonProfilesList count={20} />}>
          {session_key && meeting_key && <ProfileCardList />}
        </ErrorBoundaryWrapper>
      </CardWithHeader>
    </Container>
  )
}
