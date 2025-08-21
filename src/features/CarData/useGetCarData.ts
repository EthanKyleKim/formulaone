import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface CarDataInterface {
  brake: number
  date: string
  driver_number: number
  drs: number
  meeting_key: number
  n_gear: number
  rpm: number
  session_key: number
  speed: number
  throttle: number
}

interface GetCarDataProps {
  driver_number: number
}

export const fetchCarData = async ({ driver_number }: GetCarDataProps): Promise<CarDataInterface[]> => {
  const response = await axios.get('https://api.openf1.org/v1/car_data', {
    params: {
      driver_number: driver_number,
    },
  })
  return response.data
}

export const useFetchCarData = ({ driver_number }: GetCarDataProps) => {
  return useSuspenseQuery<CarDataInterface[], Error>({
    queryKey: ['cardata', driver_number],
    queryFn: () => fetchCarData({ driver_number }),
  })
}
