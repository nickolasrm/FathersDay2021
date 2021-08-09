import React from 'react'
import { render, screen } from '@testing-library/react'
import Feature from './index.tsx'

test('Feature rendering', async () => {
  render(<Feature title="Hi" subtitle="Ka" />)
  const el1 = await screen.findByText(/Hi/)
  const el2 = await screen.findByText(/Ka/)
  expect(el1).toBeInTheDocument()
  expect(el2).toBeInTheDocument()
})
