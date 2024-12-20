import { Ul } from '../../Atoms/Ul/Ul.styled'
import { Li } from '../../Atoms/Li/Li.styled'

interface ListProps {
  children: React.ReactNode
  flexDirection?: string
  alignItems?: string
  display?: string
}

interface ListItemProps {
  children: React.ReactNode
  width?: string
  height?: string
  alignItems?: string
  display?: string
  onClick?: () => void
  isSelected?: boolean
}

export function List({ children, flexDirection = 'row', display = 'flex' }: ListProps) {
  return (
    <Ul display={display} flexDirection={flexDirection}>
      {children}
    </Ul>
  )
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
