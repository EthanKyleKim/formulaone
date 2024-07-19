import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { DriverCard, DriverImage, DriverName, DriversContainer, DriverTeam } from './Driver.styled'

export default function Driver() {
    const { drivers } = useSelector((state: RootState) => state.drivers)

    return (
        <>
            <DriversContainer>
                {drivers.map((driver) => (
                    <DriverCard key={driver.full_name} color={`#${driver.team_colour}`}>
                        <DriverImage src={driver.headshot_url} alt={driver.full_name} />
                        <DriverName>{driver.full_name}</DriverName>
                        <DriverTeam color={`#${driver.team_colour}`}>{driver.team_name}</DriverTeam>
                    </DriverCard>
                ))}
            </DriversContainer>
        </>
    )
}
