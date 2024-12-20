import { Ul } from './Ul.styled'

interface ListProps {
  children: React.ReactNode
  flexDirection?: string
  alignItems?: string
  display?: string
}
export function List({ children, flexDirection = 'row', display = 'flex' }: ListProps) {
  return (
    <Ul display={display} flexDirection={flexDirection}>
      {children}
    </Ul>
  )
}
