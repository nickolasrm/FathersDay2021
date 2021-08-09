import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GoRightButton from './index.tsx'

test('GoRightButton rendering', async () => {
  render(<GoRightButton />)
  expect(document.querySelector('svg')).toBeDefined()
})

test('GoRightButton click', async () => {
  const fc = jest.fn()
  render(<GoRightButton onClick={fc} />)
  const el = await screen.getByTestId('btn-container')
  fireEvent.click(el)
  expect(fc).toHaveBeenCalledTimes(1)
})
