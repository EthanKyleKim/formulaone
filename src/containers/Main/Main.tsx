'use client'

import ErrorBoundaryWrapper from '../../components/ErrorBoundaryWrapper'
import ErrorPage from '../../components/ErrorPage'
import Loading from '../../components/Loading'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import Information from '../Information/Information'
import Meeting from '../Meeting/Meeting'
import { Container } from './Main.styled'

export default function Main() {
  return (
    <Container>
      <CardWithHeader headerText="2024 F1 GP 일정" width="21vw" height="93vh">
        <ErrorBoundaryWrapper fallbackComponent={ErrorPage} suspenseFallback={<Loading />}>
          <Meeting />
        </ErrorBoundaryWrapper>
      </CardWithHeader>
      <Information />
    </Container>
  )
}
