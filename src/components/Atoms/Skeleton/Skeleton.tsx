import { SkeletonBox, SkeletonContainer } from './Skeleton.styled'

interface SkeletonProps {
  width?: string
  height?: string
  count: number
  flexDirection?: 'row' | 'column'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
  gap?: string
}

export default function Skeleton({
  width,
  height,
  count,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
}: SkeletonProps) {
  return (
    <SkeletonContainer flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems} gap={gap}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonBox key={index} width={width} height={height} />
      ))}
    </SkeletonContainer>
  )
}
