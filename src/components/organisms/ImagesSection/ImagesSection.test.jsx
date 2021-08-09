import React from 'react'
import { render, screen } from '@testing-library/react'
import ImagesSection from './index.tsx'

test('Images section rendering', async () => {
  render(<ImagesSection images={[
    { image: 'test.png', comment: 'Test' },
    { image: 'test.png', comment: 'Text' }
  ]} />)
  expect(await screen.findByText(/Test/)).toBeInTheDocument()
  expect(await screen.findByText(/Text/)).toBeInTheDocument()
})
