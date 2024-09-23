// components/Footer.tsx
import React from 'react'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'
import { StyledFooter } from './Footer.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { Colors } from '../../../styles/Colors'

const IconLink = styled.a`
  color: ${Colors.white}; /* 아이콘 색상 */
  text-decoration: none;
  font-size: 50px;
  margin-top: 10px; /* 아이콘 위에 여백 추가 */
  transition: color 0.3s;

  &:hover {
    color: ${Colors.primary}; /* 마우스를 올렸을 때 색상 변경 */
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" gap="32px">
          <Box>
            <Typography variant="body1">Made By</Typography>
            <Typography variant="body2">Ethan Kim</Typography>
          </Box>
          <Box>
            <Typography variant="body1">Email</Typography>
            <Typography variant="body2">rlawngus000407@naver.com</Typography>
          </Box>
        </Box>
        <Box>
          <IconLink href="https://github.com/EthanKyleKim" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
        </Box>
      </Box>
      <Box display="flex">
        <Typography variant="caption3">
          F1 INFO is an unofficial project and is not associated in any way with the Formula 1 companies. F1, FORMULA
          ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trademarks of Formula One
          Licensing B.V.
        </Typography>
      </Box>
    </StyledFooter>
  )
}
