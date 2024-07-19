// src/features/meetings/meetingsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface MeetingInterface {
    circuit_key: string
    circuit_short_name: string
    country_code: string
    country_key: string
    country_name: string
    date_start: string
    gmt_offset: string
    location: string
    meeting_key: string
    meeting_name: string
    meeting_official_name: string
    year: number
}

interface MeetingsState {
    meetings: MeetingInterface[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: MeetingsState = {
    meetings: [],
    status: 'idle',
    error: null,
}

export const fetchMeetings = createAsyncThunk('meetings/fetchMeetings', async () => {
    const response = await axios.get('https://api.openf1.org/v1/meetings?year=2024')
    return response.data
})

const meetingsSlice = createSlice({
    name: 'meetings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeetings.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMeetings.fulfilled, (state, action: PayloadAction<MeetingInterface[]>) => {
                state.status = 'succeeded'
                state.meetings = action.payload.toReversed() // 최신순부터 보여주도록
            })
            .addCase(fetchMeetings.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch meetings'
            })
    },
})

export default meetingsSlice.reducer
