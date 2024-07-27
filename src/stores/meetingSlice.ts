import { StateCreator } from 'zustand'
import { MeetingInterface } from '../features/Meetings/useFetchMeetings'
import { sessionSliceInterface } from './sessionSlice'

export interface MeetingSliceInterface {
    meetingState: {
        countryName: MeetingInterface['country_name'] | null
    }
    setSelectedMeeting: (meeting: MeetingInterface | null) => void
}

export const meetingSlice: StateCreator<MeetingSliceInterface & Partial<sessionSliceInterface>> = (set, get) => ({
    meetingState: {
        countryName: null,
    },
    setSelectedMeeting: (meeting: MeetingInterface | null) => {
        set({
            meetingState: { countryName: meeting?.country_name || null },
        })
        // meeting 선택시 session 정보 초기화
        const resetSessionState = get().resetSessionState
        if (resetSessionState) {
            resetSessionState()
        }
    },
})
