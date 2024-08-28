import Link from 'next/link'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'
import { Colors } from '../../../styles/Colors'
import styled from 'styled-components'

// NavBar 스타일드 컴포넌트 생성
const NavBar = styled.nav`
  display: flex;
  align-items: center;
`

export default function Header() {
  return (
    <Box
      position="fixed"
      zIndex="100"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="8px 24px"
      width="calc(100% - 48px)"
      height='60px'
      overflow='none'
      backgroundColor={Colors.backgroundColor}
    >
      <div>
        <Typography variant="h1">F1 INFO</Typography>
      </div>
      <div>
        <NavBar>
          <Link href="/information" passHref style={{ textDecoration: 'none', marginRight: '40px' }}>
            <Typography variant="body1" color={Colors.white}>
              Information
            </Typography>
          </Link>
          <Link href="/livesession" passHref style={{ textDecoration: 'none' }}>
            <Typography variant="body1" color={Colors.white}>
              LiveSession
            </Typography>
          </Link>
        </NavBar>
      </div>
    </Box>
  )
}
