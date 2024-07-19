import { StateCreator } from 'zustand'
import { SessionInterface } from '../features/sessions/useSessions'

export interface sessionSliceInterface {
    sessionState: {
        meetingKey: SessionInterface['meeting_key'] | null
        sessionKey: SessionInterface['session_key'] | null
    }
    setSelectedSession: (session: SessionInterface | null) => void
}

export const sessionSlice: StateCreator<sessionSliceInterface> = (set) => ({
    sessionState: {
        meetingKey: null,
        sessionKey: null,
    },
    setSelectedSession: (session: SessionInterface | null) =>
        set({
            sessionState: {
                meetingKey: session?.meeting_key || null,
                sessionKey: session?.session_key || null,
            },
        }),
})
