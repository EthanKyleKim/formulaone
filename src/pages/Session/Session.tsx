import { SessionInterface } from '../../features/sessions/sessionsSlice'

interface SessionProps {
    selectedSession: SessionInterface
}

export default function Session({ selectedSession }: SessionProps) {
    return (
        <>
            {selectedSession && (
                <div>
                    <h1>{selectedSession.session_name}</h1>
                    <p>Location: {selectedSession.location}</p>
                    <p>Country: {selectedSession.country_name}</p>
                </div>
            )}
        </>
    )
}
