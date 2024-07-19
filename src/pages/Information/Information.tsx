import Weather from '../../components/Weather/Weather'
import { SessionInterface, useSessions } from '../../features/sessions/useSessions'
import { useMeetingsStore } from '../../store/useMeetingsStore'
import { useSessionsStore } from '../../store/useSessionStore'
import { StickyHeader, Wrapper } from '../../style/Common.styled'
import { StyledLi, StyledUl } from '../Meeting/Meeting.styled'

export default function Information() {
    const { selectedMeeting } = useMeetingsStore()
    const { handleSessionClick } = useSessionsStore()
    const { data, isSuccess } = useSessions(selectedMeeting?.country_name || '')

    return (
        <Wrapper width={'1200px'} height={'800px'}>
            <StickyHeader>Drivers</StickyHeader>

            {isSuccess && (
                <div style={{ display: 'flex' }}>
                    <StyledUl>
                        {data.map((session: SessionInterface, index: number) => {
                            return (
                                <StyledLi
                                    key={index}
                                    width="200px"
                                    height="36px"
                                    onClick={() => handleSessionClick(session)}
                                >
                                    {session.session_name}
                                </StyledLi>
                            )
                        })}
                    </StyledUl>
                    <div>
                        <Weather />
                    </div>
                </div>
            )}
        </Wrapper>
    )
}
