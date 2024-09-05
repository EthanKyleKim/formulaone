import { Colors } from '../styles/Colors'
import Box from './Atoms/Box/Box'
import { Button } from './Atoms/Button/Button'
import Typography from './Atoms/Typography/Typography'

export interface ErrorPageProps {
  error: Error | null
  resetErrorBoundary: () => void
}

export default function ErrorPage({ error, resetErrorBoundary }: ErrorPageProps) {
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h4" color={Colors.white}>
          문제가 발생했습니다.
        </Typography>
        <Typography variant="body2">{error?.message}</Typography>
        <Button onClick={resetErrorBoundary}>다시 불러오기</Button>
      </Box>
    </>
  )
}
