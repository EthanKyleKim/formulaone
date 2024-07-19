import { StateCreator } from 'zustand'
import { MeetingInterface } from '../features/meetings/useMeetings'

export interface MeetingSliceInterface {
    meetingState: {
        countryName: MeetingInterface['country_name'] | null
    }
    setSelectedMeeting: (meeting: MeetingInterface | null) => void
}

export const meetingSlice: StateCreator<MeetingSliceInterface> = (set) => ({
    meetingState: {
        countryName: null,
    },
    setSelectedMeeting: (meeting: MeetingInterface | null) =>
        set({
            meetingState: { countryName: meeting?.country_name || null },
        }),
})
