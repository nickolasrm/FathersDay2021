import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './index.tsx'

test('Title rendering', async () => {
  render(<Title>Text</Title>)
  const el = await screen.findByText(/Text/)
  expect(el).toBeInTheDocument()
})
