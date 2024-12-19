// src/components/Molecules/SkeletonList/SkeletonList.tsx
import { List, ListItem } from '../../Atoms/List/List'
import Skeleton from '../../Atoms/Skeleton/Skeleton'

interface SkeletonListProps {
  count: number
  flexDirection: string
  width?: string
  height?: string
}

export default function SkeletonList({ count, flexDirection, width, height }: SkeletonListProps) {
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <ListItem key={index} width={width} height={height}>
      <Skeleton type="block" height="24px" />
    </ListItem>
  ))

  return <List flexDirection={flexDirection}>{skeletonItems}</List>
}
