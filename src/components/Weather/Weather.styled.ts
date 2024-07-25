import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const WindDirectionIcon = styled(FontAwesomeIcon)<{ degree: number }>`
  transform: rotate(${({ degree }) => degree}deg);
  font-size: 1.5em;
  transition: transform 0.2s ease-in-out;
`
