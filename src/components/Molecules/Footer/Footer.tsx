'use client'

import React from 'react'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'
import { StyledFooter, StyledFooterIconLink } from './Footer.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <StyledFooter>
      <Box display="flex" alignItems="center" justifyContent="space-between" borderRadius="0">
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
          <StyledFooterIconLink href="https://github.com/EthanKyleKim" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub link" />
          </StyledFooterIconLink>
        </Box>
      </Box>
      <Box display="flex" borderRadius="0">
        <Typography variant="caption3">
          F1 INFO is an unofficial project and is not associated in any way with the Formula 1 companies. F1, FORMULA
          ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trademarks of Formula One
          Licensing B.V.
        </Typography>
      </Box>
    </StyledFooter>
  )
}
