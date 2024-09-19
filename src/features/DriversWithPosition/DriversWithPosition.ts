import { useMemo } from 'react'
import { useSuspenseQueries } from '@tanstack/react-query'
import { DriversInterface, fetchDrivers } from '../Drivers/useDrivers'
import { fetchPosition, FetchPositionProps, PositionInterface } from '../Position/usePosition'

/** 날짜 기준으로 가장 마지막 값을 기준으로 순위를 찾는 함수 */
const getLatestPositions = (positions: PositionInterface[]) => {
  const latestPositionsMap = positions.reduce(
    (acc, position) => {
      // 누적된 날짜 값보다 새로 들어오는 값이 더 최신이라면.
      if (!acc[position.driver_number] || new Date(acc[position.driver_number].date) < new Date(position.date)) {
        acc[position.driver_number] = position
      }
      return acc
    },
    {} as { [key: number]: PositionInterface },
  )

  return Object.values(latestPositionsMap)
}

export const useFetchDriversWithPosition = ({ meeting_key, session_key }: FetchPositionProps) => {
  const [driversQuery, positionsQuery] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['drivers', session_key],
        queryFn: () => fetchDrivers(session_key),
      },
      {
        queryKey: ['positions', meeting_key, session_key],
        queryFn: () => fetchPosition({ meeting_key, session_key }),
      },
    ],
  })

  const drivers = driversQuery.data as DriversInterface[]
  const positions = positionsQuery.data as PositionInterface[]

  // Merge drivers with their latest positions
  const mergedData = useMemo(() => {
    const latestPositions = getLatestPositions(positions)
    const merged = drivers.map((driver) => ({
      ...driver,
      position: latestPositions.find((position) => position.driver_number === driver.driver_number),
    }))
    merged.sort((a, b) => (a.position?.position ?? Infinity) - (b.position?.position ?? Infinity))
    return merged
  }, [drivers, positions])

  return { mergedData }
}
