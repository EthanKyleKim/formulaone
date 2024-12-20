import { Li } from './Li.styled'

interface ListItemProps {
  children: React.ReactNode
  width?: string
  height?: string
  alignItems?: string
  display?: string
  onClick?: () => void
  isSelected?: boolean
}
export function ListItem({
  children,
  width,
  height,
  alignItems = 'center',
  display = 'flex',
  onClick,
  isSelected,
}: ListItemProps) {
  return (
    <Li
      display={display}
      width={width}
      height={height}
      alignItems={alignItems}
      onClick={onClick}
      $isSelected={isSelected}
    >
      {children}
    </Li>
  )
}
