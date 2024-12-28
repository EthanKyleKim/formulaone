import { MeetingInterface, useFetchMeetings } from '../../../features/Meetings/useMeetings'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import Typography from '../../Atoms/Typography/Typography'
import { useState } from 'react'
import { List } from '../../Atoms/UnorderedList/UnorderedList'
import { ListItem } from '../../Atoms/ListItem/ListItem'

export default function MeetingList() {
  const { setSelectedMeeting } = useSliceMergeStore()
  const [isSelectedmeeting_key, setIsSelectedMeeting] = useState<string | null>(null)
  const { data } = useFetchMeetings()

  const handleMeetingClick = (meeting: MeetingInterface) => {
    setSelectedMeeting(meeting)
    setIsSelectedMeeting(meeting.meeting_key)
  }

  return (
    <List flexDirection="column">
      {data.map((meeting: MeetingInterface) => (
        <ListItem
          key={meeting.meeting_key}
          height="80px"
          onClick={() => handleMeetingClick(meeting)}
          isSelected={meeting.meeting_key === isSelectedmeeting_key}
        >
          <Typography variant="body1">{meeting.meeting_official_name}</Typography>
        </ListItem>
      ))}
    </List>
  )
}
