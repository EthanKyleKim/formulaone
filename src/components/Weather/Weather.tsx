import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import { useLayoutEffect, useState } from 'react'
import { WindDirectionIcon } from './Weather.styled'
import { useFetchWeather, WeatherInterface } from '../../features/weather/useWeather'
import { useSliceMergeStore } from '../../stores/useSliceMergeStore'

export default function Weather() {
    const [filteredWeather, setFilteredWeather] = useState<WeatherInterface[]>([])
    const {
        sessionState: { meetingKey, sessionKey },
    } = useSliceMergeStore()
    const { data, isSuccess } = useFetchWeather(meetingKey || 0, sessionKey || 0)

    const headers = ['강수', '바람의 방향', '바람 속도', '트랙 온도', '습도', '기온', '날짜']
    const keys: (keyof WeatherInterface)[] = [
        'rainfall',
        'wind_direction',
        'wind_speed',
        'track_temperature',
        'humidity',
        'air_temperature',
        'date',
    ]

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

    const renderCell = (item: WeatherInterface, key: keyof WeatherInterface) => {
        if (key === 'rainfall') return item[key] ? '비 옴' : '안 옴'
        if (key === 'wind_direction') return <WindDirectionIcon icon={faArrowUp} degree={item.wind_direction} />
        if (key === 'track_temperature' || key === 'air_temperature') return `${item[key]}°C`
        if (key === 'humidity') return `${item[key]}%`
        return item[key]
    }

    useLayoutEffect(() => {
        filterDate()
    }, [data, isSuccess])

    return (
        <div>
            {isSuccess &&
                headers.map((header, index) => (
                    <div style={{ display: 'flex', marginBottom: '10px' }} key={header + index}>
                        <div style={{ fontWeight: 'bold', width: '80px' }}>{header}</div>
                        {filteredWeather.map((item) => (
                            <div key={item.date} style={{ marginRight: '15px', width: '100px', textAlign: 'center' }}>
                                {renderCell(item, keys[index])}
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    )
}
