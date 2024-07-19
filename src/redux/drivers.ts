// src/features/drivers/driversSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface DriverInterface {
    broadcast_name: string
    country_code: string
    driver_number: number
    first_name: string
    full_name: string
    headshot_url: string
    last_name: string
    meeting_key: number
    name_acronym: string
    session_key: number
    team_colour: string
    team_name: string
}

interface DriversState {
    drivers: DriverInterface[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: DriversState = {
    drivers: [],
    status: 'idle',
    error: null,
}

export const fetchDrivers = createAsyncThunk('drivers/fetchDrivers', async (session_key: number) => {
    const response = await axios.get(`https://api.openf1.org/v1/drivers?session_key=${session_key}`)
    return response.data
})

const driversSlice = createSlice({
    name: 'drivers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrivers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchDrivers.fulfilled, (state, action: PayloadAction<DriverInterface[]>) => {
                state.status = 'succeeded'
                state.drivers = action.payload
            })
            .addCase(fetchDrivers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch drivers'
            })
    },
})

export default driversSlice.reducer
