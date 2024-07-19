// src/features/raceControl/raceControlSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface RaceControlInterface {
    category: string
    date: string
    driver_number: number
    flag: string
    lap_number: number
    meeting_key: number
    message: string
    scope: string
    sector: null
    session_key: number
}

interface RaceControlState {
    raceControl: RaceControlInterface[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: RaceControlState = {
    raceControl: [],
    status: 'idle',
    error: null,
}

export const fetchRaceControl = createAsyncThunk('raceControl/fetchRaceControl', async (session_key: number) => {
    const response = await axios.get(`https://api.openf1.org/v1/race_control?session_key=${session_key}`)
    return response.data
})

const raceControlSlice = createSlice({
    name: 'raceControl',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRaceControl.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRaceControl.fulfilled, (state, action: PayloadAction<RaceControlInterface[]>) => {
                state.status = 'succeeded'
                state.raceControl = action.payload
            })
            .addCase(fetchRaceControl.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch raceControl'
            })
    },
})

export default raceControlSlice.reducer
