import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import { useLayoutEffect, useState } from 'react'
import { WindDirectionIcon } from './Weather.styled'
import { useFetchWeather, WeatherInterface } from '../../features/weather/useWeather'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'
import { Wrapper } from '../../styles/Common.styled'
import Box from '../Atoms/Box/Box'

export default function Weather() {
  const [filteredWeather, setFilteredWeather] = useState<WeatherInterface[]>([])
  const {
    sessionState: { meetingKey, sessionKey },
  } = useSliceMergeStore()
  const { data, isSuccess } = useFetchWeather(meetingKey || 0, sessionKey || 0)

  const filterDate = () => {
    if (!data || data.length === 0) return

    const result: WeatherInterface[] = []
    let lastTime = dayjs(data[0].date) // 첫 번째 값

    data.forEach((item) => {
      const currentTime = dayjs(item.date)
      if (currentTime.diff(lastTime, 'minute') >= 5) {
        result.push({ ...item, date: currentTime.format('HH:mm') })
        lastTime = currentTime
      }
    })

    setFilteredWeather(result)
  }

  useLayoutEffect(() => {
    filterDate()
  }, [data, isSuccess])

  return (
    <Box width="100%" height="200px">
      <div style={{ display: 'flex', color: '#ddd' }}>
        {isSuccess &&
          filteredWeather.map((item) => (
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', textAlign: 'center' }}>
              <div>{item.rainfall ? '비 옴' : '안 옴'}</div>
              <div>{item.humidity}%</div>
              <div>{item.track_temperature}°C</div>
              <div>{item.air_temperature}°C</div>
              <WindDirectionIcon icon={faArrowUp} degree={item.wind_direction} />
              <div>{item.date}</div>
            </div>
          ))}
      </div>
    </Box>
  )
}
