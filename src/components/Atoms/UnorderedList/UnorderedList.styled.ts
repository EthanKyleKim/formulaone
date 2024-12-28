import styled from 'styled-components'

interface UlProps {
  display?: string
  flexDirection?: string
}

export const Ul = styled.ul<UlProps>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  list-style: none;
  padding: 16px;
  margin: 0;
  gap: 16px;
`
