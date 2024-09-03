// src/components/Button.js
import styled from 'styled-components'
import { Colors } from '../../../styles/Colors'

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'outline' }>`
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${(props) =>
    props.variant === 'primary' &&
    `
  background-color: ${Colors.primary};
  color: #fff;
`}
  ${(props) =>
    props.variant === 'secondary' &&
    `
  background-color: ${Colors.secondary};
  color: #fff;
`}
${(props) =>
    props.variant === 'outline' &&
    `
  background-color: transparent;
  border: 2px solid #${Colors.primary};
  color: #${Colors.primary};
`}

&:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
  }
`
