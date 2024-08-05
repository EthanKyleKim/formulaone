// src/components/atoms/List/List.styles.ts
import styled from 'styled-components'
import { Colors } from '../../../styles/Colors'

interface StyledListProps {
  display?: string
  flexDirection?: string
}

interface StyledLiProps {
  display?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  width?: string
  height?: string
  $isSelected?: boolean
}

export const StyledList = styled.ul<StyledListProps>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  list-style: none;
  padding: 16px;
  margin: 0;
  gap: 16px;
`

export const StyledListItem = styled.li<StyledLiProps>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ $isSelected }) => ($isSelected ? Colors.primary : Colors.secondary)}; // 선택된 경우의 배경색

  &:hover {
    background-color: ${Colors.primary};
  }

  dd {
    margin: 0;
  }
`
