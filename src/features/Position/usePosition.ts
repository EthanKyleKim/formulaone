import axios from 'axios'

export interface PositionInterface {
  date: string
  driver_number: number
  meeting_key: number
  position: number
  session_key: number
}

export interface FetchPositionProps {
  meeting_key: number
  session_key: number
}

export const fetchPosition = async ({ meeting_key, session_key }: FetchPositionProps): Promise<PositionInterface[]> => {
  const response = await axios.get(
    `https://api.openf1.org/v1/position?meeting_key=${meeting_key}&session_key=${session_key}`,
  )
  return response.data
}
