import styled from 'styled-components'
import { typography } from '../../../styles/Typography'
import { Colors } from '../../../styles/Colors'

export const H1 = styled.h1`
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
`

export const H2 = styled.h2`
  font-size: ${typography.h2.fontSize};
  font-weight: ${typography.h2.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
`

export const H3 = styled.h3`
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.h3.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
`

export const H4 = styled.h4`
  font-size: ${typography.h4.fontSize};
  font-weight: ${typography.h4.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
`

export const H5 = styled.h5`
  font-size: ${typography.h5.fontSize};
  font-weight: ${typography.h5.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray200)};
  white-space: pre-line;
`

export const Body1 = styled.p`
  font-size: ${typography.body1.fontSize};
  font-weight: ${typography.body1.fontWeight};
  line-height: 1.5;
  color: ${({ color }) => (color ? color : Colors.gray300)};
  white-space: pre-line;
`

export const Body2 = styled.p`
  font-size: ${typography.body2.fontSize};
  font-weight: ${typography.body2.fontWeight};
  line-height: 1.5;
  color: ${({ color }) => (color ? color : Colors.gray300)};
  white-space: pre-line;
`

export const Caption1 = styled.span`
  font-size: ${typography.caption1.fontSize};
  font-weight: ${typography.caption1.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray400)};
  white-space: pre-line;
`

export const Caption2 = styled.span`
  font-size: ${typography.caption2.fontSize};
  font-weight: ${typography.caption2.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray400)};
  white-space: pre-line;
`

export const Caption3 = styled.span`
  font-size: ${typography.caption3.fontSize};
  font-weight: ${typography.caption3.fontWeight};
  color: ${({ color }) => (color ? color : Colors.gray400)};
`
