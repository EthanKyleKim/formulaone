'use client'

import { StyledList, StyledListItem } from '../../components/Atoms/List/List.styled'
import { MeetingInterface, useFetchMeetings } from '../../features/Meetings/useMeetings'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'
import Typography from '../../components/Atoms/Typography/Typography'
import { useState } from 'react'

export default function Meeting() {
  const { setSelectedMeeting } = useSliceMergeStore()
  const [isSelectedmeeting_key, setIsSelectedMeeting] = useState<string | null>(null)
  const { data } = useFetchMeetings()

  const handleMeetingClick = (meeting: MeetingInterface) => {
    setSelectedMeeting(meeting)
    setIsSelectedMeeting(meeting.meeting_key)
  }

  return (
    <StyledList display="flex" flexDirection="column">
      {data.map((meeting: MeetingInterface) => (
        <StyledListItem
          display="flex"
          alignItems="center"
          key={meeting.meeting_key}
          height="47px"
          onClick={() => handleMeetingClick(meeting)}
          $isSelected={meeting.meeting_key === isSelectedmeeting_key}
        >
          <Typography variant="body1">{meeting.meeting_official_name}</Typography>
        </StyledListItem>
      ))}
    </StyledList>
  )
}
