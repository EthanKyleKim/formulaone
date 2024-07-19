import { useState } from 'react'
import { MeetingInterface } from '../../redux/meetings'
import Information from '../Information/Information'
import Meeting from '../Meeting/Meeting'
import { Container } from './Main.styled'

export default function Main() {
    const [selectedMeeting, setSelectedMeeting] = useState<MeetingInterface | null>(null)
    const handleMettingClick = (meeting: MeetingInterface) => {
        if (selectedMeeting && selectedMeeting.meeting_key === meeting.meeting_key) {
            setSelectedMeeting(null)
        } else {
            setSelectedMeeting(meeting)
        }
    }

    return (
        <Container>
            <Meeting handleMettingClick={handleMettingClick} />
            <Information meeting={selectedMeeting} />
        </Container>
    )
}
