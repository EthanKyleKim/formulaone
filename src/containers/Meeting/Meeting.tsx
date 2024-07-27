'use client'

import { useState } from 'react'
import { StyledList, StyledListItem } from '../../components/Atoms/List/List.styled'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import { MeetingInterface, useFetchMeetings } from '../../features/Meetings/useMeetings'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'
import Typography from '../../components/Atoms/Typography/Typography'

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
          <StyledListItem
            key={meeting.meeting_key}
            onClick={() => handleMeetingClick(meeting)}
            $isSelected={meeting.meeting_key === isSelectedMeetingKey} // 선택 여부 전달
          >
            <Typography variant="body1">{meeting.meeting_official_name}</Typography>
          </StyledListItem>
        ))
      : null
  }

  return (
    <CardWithHeader headerText="2024 F1 GP 일정" width="18%" height="800px">
      <StyledList>{meetingsList()}</StyledList>
    </CardWithHeader>
  )
}
