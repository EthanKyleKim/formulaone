import { StickyTitle } from './StickyTitle.styeld'

export default {
  title: 'Atoms/StickyTitle',
  component: StickyTitle,
  argTypes: {
    backgroundColor: { control: 'color' }, // 배경색 선택 가능
    height: { control: 'text' }, // 높이 입력 가능
  },
}

const Template = (args) => <StickyTitle {...args}>Sticky Title</StickyTitle>

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#007BFF', // 기본 색상 (예시)
  height: '60px', // 기본 높이
}
