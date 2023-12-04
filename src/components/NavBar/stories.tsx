import { Story, Meta } from '@storybook/react'
import NavBar from '.'

export default {
  title: 'NavBar',
  component: NavBar
} as Meta

const Template: Story = () => <NavBar />

jest.mock('hooks/useListItems', () => ({
  __esModule: true,
  default: () => [
    { id: 1, name: 'Camisetas', path: 'camisetas' },
    { id: 2, name: 'Calças', path: 'calcas' },
    { id: 3, name: 'Calçados', path: 'calcados' }
  ]
}))

export const Default = Template.bind({})
