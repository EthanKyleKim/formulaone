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

  return isSuccess ? (
    <CardWithHeader headerText="2024 F1 GP 일정" width="20vw" height="100vh">
      <StyledList display="flex" flexDirection="column">
        {data.map((meeting: MeetingInterface) => (
          <StyledListItem
            display="flex"
            alignItems="center"
            key={meeting.meeting_key}
            height="47px"
            onClick={() => handleMeetingClick(meeting)}
            $isSelected={meeting.meeting_key === isSelectedMeetingKey} // 선택 여부 전달
          >
            <Typography variant="body1">{meeting.meeting_official_name}</Typography>
          </StyledListItem>
        ))}
      </StyledList>
    </CardWithHeader>
  ) : null
}
