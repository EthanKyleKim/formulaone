// LeclercRadio.tsx

import { Colors } from '../../../styles/Colors'
import Box from '../../Atoms/Box/Box'
import Typography from '../../Atoms/Typography/Typography'

export default function HomeMessage() {
  return (
    <Box
      position="absolute"
      top="30%"
      margin="16px"
      padding="0px 32px 32px 32px"
      width="340px"
      backgroundColor={`${Colors.backgroundColor}`}
    >
      <Typography variant="h1" color="">
        Welcome To F1 INFO
      </Typography>
      <Typography variant="body1" color={`${Colors.gray400}`}>
        F1 INFO에 오신 것을 환영합니다.
      </Typography>
      <Typography variant="body2" color={`${Colors.gray600}`}>
        드라이버의 정보, 레이싱 정보 등을 볼 수 있습니다.
        <br />
      </Typography>
      <Typography variant="caption3">
        F1 INFO is an unofficial project and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE,
        FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trademarks of Formula One
        Licensing B.V.
      </Typography>
    </Box>
  )
}
