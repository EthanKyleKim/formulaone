import { MeetingInterface, useMeetings } from '../../features/meetings/useMeetings'
import { StickyHeader, Wrapper } from '../../style/Common.styled'
import { StyledLi, StyledUl } from './Meeting.styled'

interface MeetingProps {
    handleMettingClick: (meeting: MeetingInterface) => void
}

export default function Meeting({ handleMettingClick }: MeetingProps) {
    const { data, isSuccess } = useMeetings()

    return (
        <Wrapper width={'500px'} height={'600px'}>
            <StickyHeader>2024 F1 GP 일정</StickyHeader>

            {isSuccess && (
                <StyledUl>
                    {data.map((meeting: MeetingInterface) => (
                        <StyledLi key={meeting.meeting_key} onClick={() => handleMettingClick(meeting)}>
                            {meeting.meeting_official_name} - {meeting.location} ({meeting.country_name})
                        </StyledLi>
                    ))}
                </StyledUl>
            )}
        </Wrapper>
    )
}
