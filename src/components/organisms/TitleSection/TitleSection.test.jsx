import React from 'react'
import { render, screen } from '@testing-library/react'
import TitleSection from './index.tsx'

test('Title section rendering', async () => {
  render(<TitleSection title="Test" />)
  expect(await screen.findByText(/Test/)).toBeInTheDocument()
})

test('Title section visible', async () => {
  const fc = jest.fn()
  render(<TitleSection title="Test" onVisible={fc} />)
  expect(fc).toHaveBeenCalledTimes(1)
})
