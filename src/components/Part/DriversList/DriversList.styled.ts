import styled from 'styled-components'
import { Colors } from '../../../styles/Colors'

export const DriverCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.backgroundColor};
  padding: 24px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  min-width: 300px;
  max-width: 300px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
  }
`

export const DriverImage = styled.img`
  border-radius: 50%;
  margin-bottom: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
`

export const DriverName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
  height: 100px;
  margin-bottom: 24px;
  text-align: center;
`

export const DriverTeam = styled.div<{ color: string }>`
  font-size: 14px;
  color: ${({ color }) => color};
  margin-bottom: 24px;
  text-align: center;
`

export const DriverNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00;
  text-align: center;
`
