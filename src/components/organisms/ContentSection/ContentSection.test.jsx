import React from 'react'
import { render, screen } from '@testing-library/react'
import ContentSection from './index.tsx'

test('Content section rendering', async () => {
  render(<ContentSection><p>Text</p></ContentSection>)
  const el = await screen.findByText(/Text/)
  expect(el).toBeInTheDocument()
})

test('Content section visible', async () => {
  const fc = jest.fn()
  render(<ContentSection onVisible={fc}><p>Text</p></ContentSection>)
  expect(fc).toHaveBeenCalledTimes(1)
})
