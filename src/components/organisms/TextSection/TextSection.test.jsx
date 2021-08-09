import React from 'react'
import { render, screen } from '@testing-library/react'
import TextSection from './index.tsx'

test('Text section rendering', async () => {
  render(<TextSection text="Test" />)
  expect(await screen.findByText(/Test/)).toBeInTheDocument()
})

test('Text section visible', async () => {
  const fc = jest.fn()
  render(<TextSection text="Test" onVisible={fc} />)
  expect(fc).toHaveBeenCalledTimes(1)
})
