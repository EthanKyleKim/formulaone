'use client'

import { useState } from 'react'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import { MeetingInterface, useFetchMeetings } from '../../features/meetings/useMeetings'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'
import { StyledLi, StyledUl } from './Meeting.styled'

export default function Meeting() {
  const { setSelectedMeeting } = useSliceMergeStore()
  const [isSelectedMeetingKey, setIsSelectedMeeting] = useState<string | null>(null)
  const { data, isSuccess } = useFetchMeetings()

  const handleMeetingClick = (meeting: MeetingInterface) => {
    setSelectedMeeting(meeting)
    setIsSelectedMeeting(meeting.meeting_key) // 클릭된 항목의 키 설정
  }

  const meetingsList = () => {
    return isSuccess
      ? data.map((meeting: MeetingInterface) => (
          <StyledLi
            key={meeting.meeting_key}
            onClick={() => handleMeetingClick(meeting)}
            $isSelected={meeting.meeting_key === isSelectedMeetingKey} // 선택 여부 전달
          >
            {meeting.meeting_official_name} - {meeting.location} ({meeting.country_name})
          </StyledLi>
        ))
      : null
  }

  return (
    <CardWithHeader headerText="2024 F1 GP 일정" width="20%" height="800px">
      <StyledUl>{meetingsList()}</StyledUl>
    </CardWithHeader>
  )
}
