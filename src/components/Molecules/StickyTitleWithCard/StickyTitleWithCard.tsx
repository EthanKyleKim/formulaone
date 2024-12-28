import Box from '../../Atoms/Box/Box'
import { Colors } from '../../../styles/Colors'
import { StickyTitle } from '../../Atoms/StickyTitle/StickyTitle.styeld'
import Typography from '../../Atoms/Typography/Typography'

interface StickyTitleWithCardProps {
  titleText: string
  width?: string
  height?: string
  children: React.ReactNode
}

export default function StickyTitleWithCard({ titleText, children, width, height }: StickyTitleWithCardProps) {
  const calculatedHeight = height ? `calc(${height} - 40px)` : 'calc(100vh - 40px)'

  return (
    <div style={{ width, height: `${calculatedHeight}`, display: 'flex', flexDirection: 'column' }}>
      <StickyTitle backgroundColor={Colors.primary}>
        <Typography variant="h3">{titleText}</Typography>
      </StickyTitle>
      <Box backgroundColor={Colors.gray870} borderTopRadius="0" height="100%">
        {children}
      </Box>
    </div>
  )
}
