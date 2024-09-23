import styled from 'styled-components'

interface StickyHeaderProps {
  backgroundColor?: string
  height?: string
}

export const StyledStickyHeader = styled.div<StickyHeaderProps>`
  position: sticky;
  top: 0;
  height: ${({ height }) => (height ? height : '60px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ff1e00'};
  z-index: 2;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
