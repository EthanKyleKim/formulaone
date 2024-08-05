import React from 'react'
import { H1, H2, H3, H4, H5, Body1, Body2, Caption1, Caption2, Caption3 } from './Typography.styeld'

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'caption1' | 'caption2' | 'caption3' | 'stickyHeader'
  children: React.ReactNode
  color?: string
}

export default function Typography({ variant, children, color }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return <H1 color={color}>{children}</H1>
    case 'h2':
      return <H2 color={color}>{children}</H2>
    case 'h3':
      return <H3 color={color}>{children}</H3>
    case 'h4':
      return <H4 color={color}>{children}</H4>
    case 'h5':
      return <H5 color={color}>{children}</H5>
    case 'body1':
      return <Body1 color={color}>{children}</Body1>
    case 'body2':
      return <Body2 color={color}>{children}</Body2>
    case 'caption1':
      return <Caption1 color={color}>{children}</Caption1>
    case 'caption2':
      return <Caption2 color={color}>{children}</Caption2>
    case 'caption3':
      return <Caption3 color={color}>{children}</Caption3>
    default:
      return <Body1 color={color}>{children}</Body1>
  }
}
