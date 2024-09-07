// Skeleton.styled.ts
import styled, { keyframes } from 'styled-components'
import { Colors } from '../../../styles/Colors'

export const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

export const SkeletonContainer = styled.div<{
  flexDirection?: 'row' | 'column'
  justifyContent?: string
  alignItems?: string
  gap?: string
}>`
  padding: 16px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  gap: ${(props) => props.gap || '16px'};
`

export const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  background-color: ${Colors.secondary};
  background-image: linear-gradient(90deg, ${Colors.gray750} 25%, ${Colors.gray750} 75%);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  animation: ${shimmer} 1.5s infinite;
`
