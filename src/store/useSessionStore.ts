import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SessionInterface } from '../features/sessions/useSessions'

interface MeetingsState {
    selectedSession: SessionInterface | null
    setSelectedSession: (session: SessionInterface | null) => void
    handleSessionClick: (meeting: SessionInterface) => void
}

export const useSessionsStore = create<MeetingsState>()(
    devtools(
        (set, get) => ({
            selectedSession: null,
            setSelectedSession: (session: SessionInterface | null) => set({ selectedSession: session }),
            handleSessionClick: (session: SessionInterface) => {
                const { setSelectedSession } = get()
                setSelectedSession(session)
            },
        }),
        { name: 'MeetingsStore' },
    ),
)
