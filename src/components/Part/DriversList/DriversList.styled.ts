import { Colors } from './../../../styles/Colors'
import styled from 'styled-components'

interface DriverCardProps {
  color?: string
}

export const DriversContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`

export const DriverCard = styled.div<DriverCardProps>`
  zoom: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.backgroundColor};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-sizing: border-box;
  width: calc((100% - (4 * 20px)) / 5);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px ${({ color }) => `#${color}`};
  }
`

export const DriverPosition = styled.div``

export const DriverImage = styled.img`
  border-radius: 50%;
  width: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
`

export const DriverName = styled.div`
  display: flex;
  white-space: pre-line;
`

export const DriverTeam = styled.div<{ color?: string }>`
  padding-bottom: 20px;
  color: ${({ color }) => color};
`
