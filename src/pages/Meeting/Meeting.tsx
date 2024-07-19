import { MeetingInterface, useMeetings } from '../../features/meetings/useMeetings'
import { useSliceMergeStore } from '../../store/useSliceMergeStore'
import { StickyHeader, Wrapper } from '../../style/Common.styled'
import { StyledLi, StyledUl } from './Meeting.styled'

import { useState } from 'react'

export default function Meeting() {
    const { setSelectedMeeting } = useSliceMergeStore()
    const [selectedMeetingKey, setSelectedMeetingKey] = useState<string | null>(null)
    const { data, isSuccess } = useMeetings()

    const handleMeetingClick = (meeting: MeetingInterface) => {
        setSelectedMeeting(meeting)
        setSelectedMeetingKey(meeting.meeting_key) // 클릭된 항목의 키 설정
    }

    return (
        <Wrapper width={'500px'} height={'600px'}>
            <StickyHeader>2024 F1 GP 일정</StickyHeader>

            {isSuccess && (
                <StyledUl>
                    {data.map((meeting: MeetingInterface) => (
                        <StyledLi
                            key={meeting.meeting_key}
                            onClick={() => handleMeetingClick(meeting)}
                            isSelected={meeting.meeting_key === selectedMeetingKey} // 선택 여부 전달
                        >
                            {meeting.meeting_official_name} - {meeting.location} ({meeting.country_name})
                        </StyledLi>
                    ))}
                </StyledUl>
            )}
        </Wrapper>
    )
}
