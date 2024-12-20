'use client'

import { useEffect } from 'react'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import { InformaionContainer } from '../../Templates/InformaionContainer'
import ErrorBoundaryWrapper from '../../ErrorBoundaryWrapper'
import ErrorPage from '../../ErrorPage'
import SkeletonList from '../../Organisms/SkeletonList/SkeletonList'
import MeetingList from '../../Organisms/MeetingList/MeetingList'
import SessionsList from '../../Organisms/SessionsList/SessionsList'
import SkeletonProfilesList from '../../Organisms/SkeletonProfileCardList/SkeletonProfileCardList'
import ProfileCardList from '../../Organisms/ProfileCardList/ProfileCardList'
import StickyTitleWithCard from '../../Molecules/StickyTitleWithCard/StickyTitleWithCard'

export default function Main() {
  const {
    meetingState: { countryName },
    sessionState: { session_key, meeting_key },
    resetMeetingState,
    resetSessionState,
  } = useSliceMergeStore()

  // 최초 접근시 store 초기화
  useEffect(() => {
    resetMeetingState()
    resetSessionState()
  }, [])

  return (
    <InformaionContainer>
      <StickyTitleWithCard titleText="2024 F1 GP 일정" width="21vw" height="93vh">
        <ErrorBoundaryWrapper
          fallbackComponent={ErrorPage}
          suspenseFallback={<SkeletonList count={10} flexDirection="column" height="80px" />}
        >
          <MeetingList />
        </ErrorBoundaryWrapper>
      </StickyTitleWithCard>

      <StickyTitleWithCard titleText="세션 정보" width="75vw" height="93vh">
        <ErrorBoundaryWrapper
          fallbackComponent={ErrorPage}
          suspenseFallback={<SkeletonList count={5} flexDirection="row" width="100%" height="30px" />}
        >
          {countryName && <SessionsList />}
        </ErrorBoundaryWrapper>
        <ErrorBoundaryWrapper fallbackComponent={ErrorPage} suspenseFallback={<SkeletonProfilesList count={20} />}>
          {session_key && meeting_key && <ProfileCardList />}
        </ErrorBoundaryWrapper>
      </StickyTitleWithCard>
    </InformaionContainer>
  )
}
