import React from 'react'
import { render, screen } from '@testing-library/react'
import SectionContainer from './index.tsx'

test('Section container rendering', async () => {
  render(<SectionContainer><p>Text</p></SectionContainer>)
  const el = await screen.findByText(/Text/)
  expect(el).toBeInTheDocument()
})
