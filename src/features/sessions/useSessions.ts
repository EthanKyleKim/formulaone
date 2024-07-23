// src/features/sessions/useSessionsFetch.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface SessionInterface {
    circuit_key: number
    circuit_short_name: string
    country_code: string
    country_key: number
    country_name: string
    date_end: string
    date_start: string
    gmt_offset: string
    location: string
    meeting_key: number
    session_key: number
    session_name: string
    session_type: string
    year: number
}

const fetchSessions = async (country_name: string): Promise<SessionInterface[]> => {
    const response = await axios.get(`https://api.openf1.org/v1/sessions?country_name=${country_name}&year=2024`)
    return response.data
}

export const useSessionsFetch = (country_name: string) => {
    return useQuery<SessionInterface[], Error>({
        queryKey: ['sessions', country_name],
        queryFn: () => fetchSessions(country_name),
        enabled: !!country_name,
    })
}
