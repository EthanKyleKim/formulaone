'use client'

import { useEffect, useState } from 'react'
import Weather from '../../components/Weather/Weather'
import { SessionInterface, useSessionsFetch } from '../../features/sessions/useSessions'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'

import { StickyHeader, Wrapper } from '../../styles/Common.styled'
import { StyledLi, StyledUl } from '../Meeting/Meeting.styled'
import Box from '../../components/Atoms/Box/Box'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'

export default function Information() {
  const [isSelectedSession, setIsSelectedSession] = useState<string | null>(null)
  const {
    meetingState: { countryName },
    setSelectedSession,
  } = useSliceMergeStore()
  const { data, isSuccess } = useSessionsFetch(countryName || '')

  useEffect(() => {
    setIsSelectedSession(null)
  }, [countryName])

  const handleSessionClick = (session: SessionInterface) => {
    setSelectedSession(session)
    setIsSelectedSession(session.session_name) // 클릭된 항목의 키 설정
  }

  const sessionsList = () => {
    return isSuccess
      ? data.map((session: SessionInterface) => {
          return (
            <StyledLi
              key={session.session_name}
              width="200px"
              height="36px"
              onClick={() => handleSessionClick(session)}
              $isSelected={session.session_name === isSelectedSession} // 선택 여부 전달
            >
              {session.session_name}
            </StyledLi>
          )
        })
      : null
  }

  return (
    <CardWithHeader headerText="세션 정보" width="80%" height="800px">
      <StyledUl>{sessionsList()}</StyledUl>
      <Weather />
    </CardWithHeader>
  )
}
