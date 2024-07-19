import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { MeetingInterface } from '../features/meetings/useMeetings'

interface MeetingsState {
    selectedMeeting: MeetingInterface | null
    setSelectedMeeting: (meeting: MeetingInterface | null) => void
    handleMeetingClick: (meeting: MeetingInterface) => void
}

export const useMeetingsStore = create<MeetingsState>()(
    devtools(
        (set, get) => ({
            selectedMeeting: null,
            setSelectedMeeting: (meeting: MeetingInterface | null) => set({ selectedMeeting: meeting }),
            handleMeetingClick: (meeting: MeetingInterface) => {
                const { setSelectedMeeting } = get()
                setSelectedMeeting(meeting)
            },
        }),
        { name: 'MeetingsStore' },
    ),
)
