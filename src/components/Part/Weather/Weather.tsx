import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import { useLayoutEffect, useState } from 'react'
import { WindDirectionIcon } from './Weather.styled'
import { useFetchWeather, WeatherInterface } from '../../../features/Weather/useWeather'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import Box from '../../Atoms/Box/Box'
import { Colors } from '../../../styles/Colors'
import Typography from '../../Atoms/Typography/Typography'
import { StyledList, StyledListItem } from '../../Atoms/List/List.styled'

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
    <Box display="flex" backgroundColor={Colors.gray750} margin="8px">
      <StyledList style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>
        {isSuccess &&
          filteredWeather.map((item) => (
            <StyledListItem display="inline-block" width="80px">
              <dl>
                <dt>
                  <Typography variant="body2">{item.rainfall ? '비옴' : '비 안옴'}</Typography>
                </dt>
                <dd>
                  <Typography variant="body2">{item.air_temperature}°C</Typography>
                </dd>
                <dd>
                  <WindDirectionIcon icon={faArrowUp} degree={item.wind_direction} />
                </dd>
                <dd>
                  <Typography variant="body2">{item.date}</Typography>
                </dd>
              </dl>
            </StyledListItem>
          ))}
      </StyledList>
    </Box>
  )
}
