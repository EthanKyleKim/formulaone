import { MeetingInterface, useMeetings } from '../../features/meetings/useMeetings'
import { StickyHeader, Wrapper } from '../../style/Common.styled'
import { StyledLi, StyledUl } from './Meeting.styled'
import { useMeetingsStore } from '../../store/useMeetingsStore'

export default function Meeting() {
    const { data, isSuccess } = useMeetings()
    const { handleMeetingClick } = useMeetingsStore()

    return (
        <Wrapper width={'500px'} height={'600px'}>
            <StickyHeader>2024 F1 GP 일정</StickyHeader>

            {isSuccess && (
                <StyledUl>
                    {data.map((meeting: MeetingInterface) => (
                        <StyledLi key={meeting.meeting_key} onClick={() => handleMeetingClick(meeting)}>
                            {meeting.meeting_official_name} - {meeting.location} ({meeting.country_name})
                        </StyledLi>
                    ))}
                </StyledUl>
            )}
        </Wrapper>
    )
}
