'use client'

import Skeleton from '../../components/Atoms/Skeleton/Skeleton'
import ErrorBoundaryWrapper from '../../components/ErrorBoundaryWrapper'
import ErrorPage from '../../components/ErrorPage'
import Loading from '../../components/Loading'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
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
          suspenseFallback={<Skeleton count={10} width="100%" height="90px" />}
        >
          <Meeting />
        </ErrorBoundaryWrapper>
      </CardWithHeader>
      <CardWithHeader headerText="세션 정보" width="75vw" height="93vh">
        <ErrorBoundaryWrapper
          fallbackComponent={ErrorPage}
          suspenseFallback={<Skeleton count={5} flexDirection="row" width="100%" height="50px" />}
        >
          {countryName && <SessionsList />}
        </ErrorBoundaryWrapper>
        <ErrorBoundaryWrapper
          fallbackComponent={ErrorPage}
          suspenseFallback={
            <Skeleton count={5} flexDirection="row" width={'calc((100% - (4 * 20px)) / 5)'} height="420.352px" />
          }
        >
          {session_key && meeting_key && <DriversList />}
        </ErrorBoundaryWrapper>
      </CardWithHeader>
    </Container>
  )
}
