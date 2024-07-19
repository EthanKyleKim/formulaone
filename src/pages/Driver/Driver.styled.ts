import styled from 'styled-components'

const DriversContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
`

const DriverCard = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${({ color }) => `linear-gradient(to right, ${color}FF, ${color}00)`};
    width: 100%;
    height: 40px;
    padding: 16px;
    margin: 4px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
        transform: translateX(5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`

const DriverImage = styled.img`
    width: 60px;
    height: 60px;
`

const DriverName = styled.div`
    font-size: 18px;
    font-weight: bold;
    width: 40%;
    text-align: left;
`

const DriverTeam = styled.div<{ color: string }>`
    font-size: 16px;
    color: ${({ color }) => color};
    width: 30%;
    text-align: right;
`

const DriverNumber = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #666;
`

export { DriverCard, DriverImage, DriverName, DriverTeam, DriverNumber, DriversContainer }
