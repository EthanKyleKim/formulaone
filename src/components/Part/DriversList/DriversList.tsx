import { useFetchDrivers } from '../../../features/Drivers/useDrivers'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import Typography from '../../Atoms/Typography/Typography'
import { DriverCard, DriverImage, DriverName, DriversContainer, DriverTeam } from './DriversList.styled'

export default function DriversList() {
  const {
    sessionState: { sessionKey },
  } = useSliceMergeStore()
  const { data, isSuccess } = useFetchDrivers(sessionKey)

  return (
    isSuccess && (
      <DriversContainer>
        {data.map((driver) => (
          <DriverCard key={driver.full_name} color={driver.team_colour}>
            <DriverImage src={driver.headshot_url} alt={driver.full_name} />
            <DriverName>
              <Typography variant="body1">{driver.full_name.replace(/ /g, '\n')}</Typography>
            </DriverName>
            <DriverTeam color={`#${driver.team_colour}`}>{driver.team_name}</DriverTeam>
          </DriverCard>
        ))}
      </DriversContainer>
    )
  )
}
