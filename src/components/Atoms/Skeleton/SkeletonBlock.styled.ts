// Atoms/SkeletonBlock.tsx
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

export const SkeletonBlock = styled.div<{ width?: string; height?: string }>`
  background: linear-gradient(90deg, ${Colors.gray750} 25%, ${Colors.gray870} 50%, ${Colors.gray750} 75%);
  background-size: 400% 100%;
  border-radius: 4px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  animation: ${shimmer} 1.5s infinite linear;
`
