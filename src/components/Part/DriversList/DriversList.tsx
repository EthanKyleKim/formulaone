import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import Typography from '../../Atoms/Typography/Typography'
import { DriverCard, DriverImage, DriverName, DriverPosition, DriversContainer, DriverTeam } from './DriversList.styled'
import { useFetchDriversWithPosition } from '../../../features/DriversWithPosition/DriversWithPosition'
import { useEffect } from 'react'

export default function DriversList() {
  const {
    sessionState: { session_key, meeting_key },
  } = useSliceMergeStore()

  const { mergedData, isSuccess, error } = useFetchDriversWithPosition({ meeting_key, session_key })

  useEffect(() => {
    if (mergedData.length > 0) {
      console.log('Merged Data: ', mergedData)
    }
  }, [mergedData])

  return (
    isSuccess && (
      <DriversContainer>
        {mergedData.map((driver) => {
          let rankTitle = 'st'
          if (driver.position?.position === 1) rankTitle = 'st'
          if (driver.position?.position === 2) rankTitle = 'nd'
          if (driver.position?.position === 3) rankTitle = 'rd'

          return (
            <DriverCard key={driver.full_name} color={driver.team_colour}>
              <DriverPosition>
                <Typography variant="h1">{`${driver.position?.position}${rankTitle}`}</Typography>
              </DriverPosition>
              <DriverImage src={driver.headshot_url} alt={driver.full_name} />
              <DriverName>
                <Typography variant="h4">{driver.full_name.replace(/ /g, '\n')}</Typography>
              </DriverName>
              <DriverTeam>
                <Typography variant="h5" color={`#${driver.team_colour}`}>
                  {driver.team_name}
                </Typography>
              </DriverTeam>
            </DriverCard>
          )
        })}
      </DriversContainer>
    )
  )
}
