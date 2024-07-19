import { devtools } from 'zustand/middleware'
import { create } from 'zustand'
import { sessionSlice, sessionSliceInterface } from './sessionSlice'
import { meetingSlice, MeetingSliceInterface } from './meetingSlice'

export const useSliceMergeStore = create<sessionSliceInterface & MeetingSliceInterface>()(
    devtools((...args) => ({
        ...sessionSlice(...args),
        ...meetingSlice(...args),
    })),
)
