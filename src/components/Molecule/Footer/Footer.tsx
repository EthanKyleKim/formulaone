// components/Footer.tsx
import React from 'react'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Colors } from '../../../styles/Colors'

export default function Footer() {
  return (
    <Box backgroundColor={Colors.backgroundColor} padding="16px 24px">
      <Box>
        <Typography variant="caption3">Made By KimJuHyoeon</Typography>
      </Box>
      <Box>
        <Typography variant="caption3">Phone : +82 10-5655-0407</Typography>
      </Box>
      <Box>
        <Typography variant="caption3">Email: rlawngus000407@naver.com</Typography>
      </Box>
      <Box>
        <Typography variant="caption3">
          F1 INFO is an unofficial project and is not associated in any way with the Formula 1 companies. F1, FORMULA
          ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trademarks of Formula One
          Licensing B.V.
        </Typography>
      </Box>
    </Box>
  )
}
