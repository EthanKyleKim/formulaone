import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const Image = styled.img<{ fadeType: 'in' | 'out' }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0.7); /* 이미지 어둡게 처리 */
    animation: ${({ fadeType }) => (fadeType === 'in' ? fadeIn : fadeOut)} 2s forwards;
`

export { Image }
