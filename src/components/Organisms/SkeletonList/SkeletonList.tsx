import { ListItem } from '../../Atoms/ListItem/ListItem'
import Skeleton from '../../Atoms/Skeleton/Skeleton'
import { List } from '../../Atoms/UnorderedList/UnorderedList'

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
