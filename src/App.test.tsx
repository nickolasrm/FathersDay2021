import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App rendering', () => {
  render(<App />)
  const el = document.body.querySelector('main')
  expect(el).toBeDefined()
})
