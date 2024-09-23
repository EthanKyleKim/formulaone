// src/components/Atoms/Box/Box.styled.ts
import styled, { css } from 'styled-components'

interface StyledBoxProps {
  top?: string
  bottom?: string
  left?: string
  right?: string
  zIndex?: string
  position?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  borderTopRadius?: string
  borderBottomRadius?: string
  boxShadow?: string
  display?: string
  gap?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  textAlign?: string
  width?: string
  height?: string
  overflow?: string
  maxHeight?: string
  maxWidth?: string
  flexWrap?: string
  boxShadowHover?: string
  transformHover?: string
  transition?: string
  zoom?: string
}

export const StyledBox = styled.div<StyledBoxProps>`
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ borderTopRadius }) =>
    borderTopRadius && `border-top-left-radius: ${borderTopRadius}; border-top-right-radius: ${borderTopRadius};`}
  ${({ borderBottomRadius }) =>
    borderBottomRadius &&
    `border-bottom-left-radius: ${borderBottomRadius}; border-bottom-right-radius: ${borderBottomRadius};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ zoom }) => zoom && `zoom: ${zoom};`}

  ${({ boxShadowHover, transformHover }) =>
    (boxShadowHover || transformHover) &&
    css`
      &:hover {
        ${boxShadowHover && `box-shadow: ${boxShadowHover};`}
        ${transformHover && `transform: ${transformHover};`}
      }
    `}
`
