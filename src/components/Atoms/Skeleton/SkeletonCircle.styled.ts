// Atoms/SkeletonCircle.tsx
import styled, { keyframes } from 'styled-components'
import { Colors } from '../../../styles/Colors'

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

export const SkeletonCircle = styled.div<{ size?: string }>`
  background: linear-gradient(90deg, ${Colors.gray750} 25%, ${Colors.gray800} 50%, ${Colors.gray750} 75%);
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  animation: ${shimmer} 1.5s infinite linear;
`
