import React from 'react'
import { render, screen } from '@testing-library/react'
import FeatureTitle from './index.tsx'

test('Feature title rendering', async () => {
  render(<FeatureTitle>Text</FeatureTitle>)
  const el = await screen.findByText(/Text/)
  expect(el).toBeInTheDocument()
})
