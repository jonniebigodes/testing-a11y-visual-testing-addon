import type { Meta, StoryObj } from '@storybook/react'

import { CheckoutPage } from './CheckoutPage'

const meta = {
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CheckoutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const WithItems: Story = {
  parameters: {
    store: {
      initialState: {
        cart: {
          visible: false,
          items: [
            {
              id: 2,
              name: 'Fries',
              description: 'Fried french fries',
              price: 2.5,
              quantity: 2,
            },
            {
              id: 1,
              name: 'Cheeseburger',
              description: 'Nice grilled burger with cheese',
              price: 8.5,
              quantity: 1,
            },
          ],
        },
      },
    },
  },
}
