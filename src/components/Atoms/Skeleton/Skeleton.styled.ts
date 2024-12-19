// Skeleton.styled.ts
import styled, { keyframes } from 'styled-components'
import { Colors } from '../../../styles/Colors'

interface StyledSkeletonProps {
  type: 'circle' | 'block'
  size?: string // For circle
  width?: string // For block
  height?: string // For block
}

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  background-color: ${Colors.gray750};
  animation: ${blink} 2s ease-in-out infinite;
  border-radius: ${({ type }) => (type === 'circle' ? '50%' : '4px')};
  width: ${({ type, size, width }) => (type === 'circle' ? size : width || '100%')};
  height: ${({ type, size, height }) => (type === 'circle' ? size : height || '16px')};
`
