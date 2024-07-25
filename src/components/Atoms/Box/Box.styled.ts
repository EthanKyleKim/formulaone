import styled from 'styled-components'

interface BoxProps {
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  borderTopRadius?: string
  borderBottomRadius?: string
  boxShadow?: string
  display?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  width?: string
  height?: string
  overflow?: string
  maxHeight?: string
}

export const StyledBox = styled.div<BoxProps>`
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  border-top-left-radius: ${({ borderRadius, borderTopRadius }) => borderTopRadius || borderRadius || '8px'};
  border-top-right-radius: ${({ borderRadius, borderTopRadius }) => borderTopRadius || borderRadius || '8px'};
  border-bottom-left-radius: ${({ borderRadius, borderBottomRadius }) => borderBottomRadius || borderRadius || '8px'};
  border-bottom-right-radius: ${({ borderRadius, borderBottomRadius }) => borderBottomRadius || borderRadius || '8px'};
  box-shadow: ${({ boxShadow }) => boxShadow || '0 4px 8px rgba(0, 0, 0, 0.1)'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  overflow: ${({ overflow }) => overflow || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};

  &::-webkit-scrollbar {
    width: 8px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1a1a1a;
    border-radius: 8px;
  }
`
