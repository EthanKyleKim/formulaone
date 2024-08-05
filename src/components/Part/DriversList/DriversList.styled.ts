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
  width: calc((100% - (4 * 16px)) / 5);
  height: 200px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px ${({ color }) => `#${color}`};
  }
`

export const DriverImage = styled.img`
  width: 80px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
`

export const DriverName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
  text-align: center;
`

export const DriverTeam = styled.div<{ color: string }>`
  font-size: 14px;
  color: ${({ color }) => color};
`

export const DriverNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00;
`
