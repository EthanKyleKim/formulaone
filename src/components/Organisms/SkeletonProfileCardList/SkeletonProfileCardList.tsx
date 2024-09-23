import SkeletonProfileCard from '../../Molecules/SkeletonProfileCard/SkeletonProfileCard'
import Box from '../../Atoms/Box/Box'

interface SkeletonProfilesListProps {
  count: number
}

export default function SkeletonProfilesList({ count }: SkeletonProfilesListProps) {
  const skeletonProfiles = Array.from({ length: count }, (_, index) => <SkeletonProfileCard key={index} />)

  return (
    <Box display="flex" flexWrap="wrap" gap="16px" padding="16px">
      {skeletonProfiles}
    </Box>
  )
}
