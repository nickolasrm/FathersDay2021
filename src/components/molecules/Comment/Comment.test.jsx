import React from 'react'
import { render, screen } from '@testing-library/react'
import Comment from './index.tsx'

test('Comment rendering', async () => {
  render(<Comment text="Hi" />)
  const el1 = await screen.findByText(/Hi/)
  const el2 = document.body.querySelector('svg')
  expect(el1).toBeInTheDocument()
  expect(el2).toBeDefined()
})
