// src/features/weather/weatherSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface WeatherInterface {
    air_temperature: number
    date: string
    humidity: number
    meeting_key: number
    pressure: number
    rainfall: number
    session_key: number
    track_temperature: number
    wind_direction: number
    wind_speed: number
}

interface WeatherState {
    weather: WeatherInterface[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: WeatherState = {
    weather: [],
    status: 'idle',
    error: null,
}

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({ meeting_key, session_key }: { meeting_key: number; session_key: number }) => {
        const response = await axios.get(
            `https://api.openf1.org/v1/weather?meeting_key=${meeting_key}&session_key=${session_key}`,
        )
        return response.data
    },
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherInterface[]>) => {
                state.status = 'succeeded'
                state.weather = action.payload
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch weather'
            })
    },
})

export default weatherSlice.reducer
