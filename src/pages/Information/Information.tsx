import { useState } from 'react'
import Weather from '../../components/Weather/Weather'
import { MeetingInterface } from '../../features/meetings/useMeetings'
import { SessionInterface, useSessions } from '../../features/sessions/useSessions'
import { StickyHeader, Wrapper } from '../../style/Common.styled'
import { StyledLi, StyledUl } from '../Meeting/Meeting.styled'
import { useWeather } from '../../features/weather/useWeather'

interface InformationProps {
    meeting: MeetingInterface | null
}

export default function Information({ meeting }: InformationProps) {
    const { data: sessions, isSuccess } = useSessions(meeting?.country_name || '')

    return (
        <Wrapper width={'1200px'} height={'800px'}>
            <StickyHeader>Drivers</StickyHeader>

            {isSuccess && (
                <div style={{ display: 'flex' }}>
                    <StyledUl>
                        {sessions.map((session: SessionInterface, index: number) => {
                            return (
                                <StyledLi
                                    key={index}
                                    width="200px"
                                    height="36px"
                                    onClick={() => handleSelectChange(session.session_name)}
                                >
                                    {session.session_name}
                                </StyledLi>
                            )
                        })}
                    </StyledUl>
                    <div>{selectedSession && <Weather weather={weather} />}</div>
                </div>
            )}
        </Wrapper>
    )
}
