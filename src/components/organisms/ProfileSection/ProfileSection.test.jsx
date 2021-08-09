import React from 'react'
import { render, screen } from '@testing-library/react'
import ProfileSection from './index.tsx'

test('Profile section rendering', async () => {
  render(<ProfileSection image="test.png" name="Test" description="Description"/>)
  expect(await screen.findByText(/Test/)).toBeInTheDocument()
  expect(await screen.findByText(/Description/)).toBeInTheDocument()
  expect(await screen.findByAltText(/Test/)).toBeInTheDocument()
})

test('Profile section visible', async () => {
  const fc = jest.fn()
  render(<ProfileSection image="test.png"
    name="Test"
    description="Description"
    onVisible={fc} />)
  expect(fc).toHaveBeenCalledTimes(1)
})
