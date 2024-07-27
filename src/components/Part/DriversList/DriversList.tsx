import { useFetchDrivers } from '../../../features/Drivers/useDrivers'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import { Colors } from '../../../styles/Colors'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'
import { DriverCard, DriverImage, DriverName, DriverNumber, DriverTeam } from './DriversList.styled'

export default function DriversList() {
  const {
    sessionState: { sessionKey },
  } = useSliceMergeStore()
  const { data, isSuccess } = useFetchDrivers(sessionKey)

  return (
    isSuccess && (
      <Box display="flex" margin="8px" width="90%" backgroundColor={Colors.gray750}>
        {data.map((driver) => (
          <DriverCard key={driver.full_name}>
            <DriverImage src={driver.headshot_url} alt={driver.full_name} />
            <DriverName>
              <Typography variant="h3">{driver.full_name.replace(/ /g, '\n')}</Typography>
            </DriverName>
            <DriverTeam color={`#${driver.team_colour}`}>{driver.team_name}</DriverTeam>
            <DriverNumber>
              <Typography variant="h4">{driver.driver_number}</Typography>
            </DriverNumber>
          </DriverCard>
        ))}
      </Box>
    )
  )
}
