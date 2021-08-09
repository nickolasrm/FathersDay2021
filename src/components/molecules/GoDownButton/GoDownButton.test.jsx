import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GoDownButton from './index.tsx'

test('GoDownButton rendering', async () => {
  render(<GoDownButton />)
  expect(document.querySelector('svg')).toBeDefined()
})

test('GoDownButton click', async () => {
  const fc = jest.fn()
  render(<GoDownButton onClick={fc} />)
  const el = await screen.getByTestId('btn-container')
  fireEvent.click(el)
  expect(fc).toHaveBeenCalledTimes(1)
})
