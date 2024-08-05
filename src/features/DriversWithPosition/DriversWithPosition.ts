import { useEffect, useState } from 'react'
import { useFetchDrivers, DriversInterface } from '../Drivers/useDrivers'
import { useFetchPosition, PositionInterface, FetchPositionProps } from '../Position/usePosition'

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
  const { data: drivers, isSuccess: driversIsSuccess, error: driversError } = useFetchDrivers(session_key)
  const {
    data: positions,
    isSuccess: positionsIsSuccess,
    error: positionsError,
  } = useFetchPosition({ meeting_key, session_key })

  const [mergedData, setMergedData] = useState<(DriversInterface & { position: PositionInterface | undefined })[]>([])

  useEffect(() => {
    if (driversIsSuccess && positionsIsSuccess) {
      const latestPositions = getLatestPositions(positions)
      const merged = drivers.map((driver) => ({
        ...driver,
        position: latestPositions.find((position) => position.driver_number === driver.driver_number),
      }))
      merged.sort((a, b) => (a.position?.position ?? Infinity) - (b.position?.position ?? Infinity))
      setMergedData(merged)
    }
  }, [drivers, positions])

  return { mergedData, isSuccess: driversIsSuccess && positionsIsSuccess, error: driversError || positionsError }
}
