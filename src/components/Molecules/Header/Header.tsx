'use client'
import Link from 'next/link'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'
import { Colors } from '../../../styles/Colors'
import { StyledNavBar } from './Header.styled'

export default function Header() {
  return (
    <header>
      <Box
        borderRadius="0"
        position="fixed"
        zIndex="100"
        top="0"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="8px 24px"
        width="calc(100% - 48px)"
        height="60px"
        overflow="none"
        backgroundColor={Colors.backgroundColor}
      >
        <div>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Typography variant="h1">F1 INFO</Typography>
          </Link>
        </div>
        <div>
          <StyledNavBar>
            <Link href="/information" passHref style={{ textDecoration: 'none' }}>
              <Typography variant="body1" color={Colors.white}>
                Information
              </Typography>
            </Link>
          </StyledNavBar>
        </div>
      </Box>
    </header>
  )
}
