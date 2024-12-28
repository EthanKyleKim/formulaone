import { ListItem } from "./ListItem"

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
}

const Template = (args) => <ListItem {...args}>Sample Item</ListItem>

export const Default = Template.bind({})
Default.args = {
  width: '200px',
  height: '50px',
  alignItems: 'center',
  isSelected: false,
}

export const Selected = Template.bind({})
Selected.args = {
  width: '200px',
  height: '50px',
  alignItems: 'center',
  isSelected: true,
}
