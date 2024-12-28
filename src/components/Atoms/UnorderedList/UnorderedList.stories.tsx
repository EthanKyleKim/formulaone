import { List } from './UnorderedList'
import { ListItem } from '../ListItem/ListItem'

export default {
  title: 'Atoms/UnorderedList',
  component: List,
}

export const Default = () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
)

export const VerticalList = () => (
  <List flexDirection="column">
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
)
