import React from 'react'
import { render, screen } from '@testing-library/react'
import Image from './index.tsx'

test('Image rendering', async () => {
  render(<Image file="test.png" alt="Test" />)
  const el = await screen.findByAltText(/Test/)
  expect(el).toBeInTheDocument()
})
