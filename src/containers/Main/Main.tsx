'use client'

import ErrorBoundaryWrapper from '../../components/ErrorBoundaryWrapper'
import ErrorPage from '../../components/ErrorPage'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import SkeletonList from '../../components/Molecule/SkeletonList/SkeletonList'
import SkeletonProfile from '../../components/Molecule/SkeletonProfile/SkeletonProfile'
import DriversList from '../../components/Part/DriversList/DriversList'
import SessionsList from '../../components/Part/SessionsList/SessionsList'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'
import Meeting from '../Meeting/Meeting'
import { Container } from './Main.styled'

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
        <ErrorBoundaryWrapper fallbackComponent={ErrorPage} suspenseFallback={<SkeletonProfile count={20} />}>
          {session_key && meeting_key && <DriversList />}
        </ErrorBoundaryWrapper>
      </CardWithHeader>
    </Container>
  )
}
