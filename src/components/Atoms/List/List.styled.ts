// src/components/atoms/List/List.styles.ts
import styled from 'styled-components'
import { Colors } from '../../../styles/Colors'

type StyledLiProps = {
  display?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  width?: string
  height?: string
  $isSelected?: boolean
}

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const StyledListItem = styled.li<StyledLiProps>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ $isSelected }) => ($isSelected ? Colors.primary : Colors.secondary)}; // 선택된 경우의 배경색

  &:hover {
    background-color: ${Colors.primary};
  }

  dd {
    margin: 0;
  }
`
