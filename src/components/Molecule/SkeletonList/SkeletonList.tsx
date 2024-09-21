import { StyledList, StyledListItem } from '../../Atoms/List/List.styled'
import { SkeletonBlock } from '../../Atoms/Skeleton/SkeletonBlock.styled'

interface SkeletonListProps {
  count: number
  flexDirection: string
  width?: string
  height?: string
}

export default function SkeletonList({ count, flexDirection, width, height }: SkeletonListProps) {
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <StyledListItem key={index} display="flex" alignItems="center" width={width} height={height}>
      <SkeletonBlock height="24px" />
    </StyledListItem>
  ))

  return (
    <StyledList display="flex" flexDirection={flexDirection}>
      {skeletonItems}
    </StyledList>
  )
}
