import { StateCreator } from 'zustand'
import { SessionInterface } from '../features/Sessions/useSessions'

export interface sessionSliceInterface {
  sessionState: {
    meeting_key: SessionInterface['meeting_key'] | null
    session_key: SessionInterface['session_key'] | null
  }
  setSelectedSession: (session: SessionInterface | null) => void
  resetSessionState: () => void
}

export const sessionSlice: StateCreator<sessionSliceInterface> = (set) => ({
  sessionState: {
    meeting_key: null,
    session_key: null,
  },
  setSelectedSession: (session: SessionInterface | null) =>
    set({
      sessionState: {
        meeting_key: session?.meeting_key || null,
        session_key: session?.session_key || null,
      },
    }),
  resetSessionState: () =>
    set({
      sessionState: {
        meeting_key: null,
        session_key: null,
      },
    }),
})
