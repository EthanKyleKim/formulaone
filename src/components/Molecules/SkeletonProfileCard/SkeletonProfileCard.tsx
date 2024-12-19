import { Colors } from '../../../styles/Colors'
import Box from '../../Atoms/Box/Box'
import Skeleton from '../../Atoms/Skeleton/Skeleton'
import Typography from '../../Atoms/Typography/Typography'

export default function SkeletonProfileCard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="calc((100% - (4 * 20px)) / 5)"
      height="420px"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
      backgroundColor={`${Colors.backgroundColor}`}
      borderRadius="8px"
      transformHover="translateY(-5px)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      zoom="80%"
    >
      <Typography variant="h1">
        <Skeleton type="block" width="90px" height="58.75px" />
      </Typography>
      <Skeleton type="circle" size="100px" />
      <Typography variant="h4">
        <Skeleton type="block" width="185px" height="57.5px" />
      </Typography>
      <Typography variant="body1">
        <Skeleton type="block" width="140px" height="24px" />
      </Typography>
    </Box>
  )
}
