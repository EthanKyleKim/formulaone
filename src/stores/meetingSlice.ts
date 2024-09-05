import { StateCreator } from 'zustand'
import { sessionSliceInterface } from './sessionSlice'
import { MeetingInterface } from '../features/Meetings/useMeetings'

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
