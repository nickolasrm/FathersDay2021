import React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './index.tsx'

test('Text rendering', async () => {
  render(<Text>Text</Text>)
  const el = await screen.findByText(/Text/)
  expect(el).toBeInTheDocument()
})
