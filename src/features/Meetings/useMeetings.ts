import { useSuspenseQuery } from '@tanstack/react-query'
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

export const fetchMeetings = async (): Promise<MeetingInterface[]> => {
  const response = await axios.get(`https://api.openf1.org/v1/meetings?year=2024`)
  return response.data.reverse() // 서버에서 역순 정렬
}

export const useFetchMeetings = () => {
  return useSuspenseQuery<MeetingInterface[], Error>({
    queryKey: ['meetings'],
    queryFn: fetchMeetings,
  })
}
