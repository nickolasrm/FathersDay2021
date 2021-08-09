import React from 'react'
import { render, screen } from '@testing-library/react'
import ProfileImage from './index.tsx'

test('Profile image rendering', async () => {
  render(<ProfileImage file="test.png" alt="Test" />)
  const el = await screen.findByAltText(/Test/)
  expect(el).toBeInTheDocument()
})
