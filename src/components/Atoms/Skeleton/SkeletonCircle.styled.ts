import styled, { keyframes } from 'styled-components'
import { Colors } from '../../../styles/Colors'

// Opacity 변화를 이용해 천천히 껌벅거리는 효과
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

export const StyledSkeletonCircle = styled.div<{ size?: string }>`
  background-color: ${Colors.gray750};
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  animation: ${blink} 2s ease-in-out infinite; // 천천히 껌벅거리는 애니메이션
`
