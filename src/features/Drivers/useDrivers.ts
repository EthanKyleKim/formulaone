import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface DriversInterface {
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

export const fetchDrivers = async (session_key: number): Promise<DriversInterface[]> => {
  const response = await axios.get(`https://api.openf1.org/v1/drivers?session_key=${session_key}`)
  return response.data
}

export const useFetchDrivers = (session_key: number) => {
  return useSuspenseQuery<DriversInterface[], Error>({
    queryKey: ['drivers', session_key],
    queryFn: () => fetchDrivers(session_key),
  })
}
