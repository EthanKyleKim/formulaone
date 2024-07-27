import { Colors } from './../../../styles/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const WindDirectionIcon = styled(FontAwesomeIcon)<{ degree: number }>`
  transform: rotate(${({ degree }) => degree}deg);
  color: ${Colors.gray100};
  font-size: 30px;
  transition: transform 0.2s ease-in-out;
`
