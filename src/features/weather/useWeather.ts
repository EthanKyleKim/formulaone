// src/features/sessions/useSessions.ts
import { useQuery } from '@tanstack/react-query'
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

const fetchWeather = async (meeting_key: number, session_key: number): Promise<WeatherInterface[]> => {
    const response = await axios.get(
        `https://api.openf1.org/v1/weather?meeting_key=${meeting_key}&session_key=${session_key}`,
    )
    return response.data
}

export const useWeather = (meeting_key: number, session_key: number) => {
    return useQuery<WeatherInterface[], Error>({
        queryKey: ['weather', meeting_key, session_key],
        queryFn: () => fetchWeather(meeting_key, session_key),
        enabled: !!meeting_key && !!session_key,
    })
}
