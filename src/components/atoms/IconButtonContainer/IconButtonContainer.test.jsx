import React from 'react'
import { render, screen } from '@testing-library/react'
import IconButtonContainer from './index.tsx'
import { Folder } from 'react-bootstrap-icons'

test('Icon button container rendering', async () => {
  render(<IconButtonContainer><Folder /></IconButtonContainer>)
  const el = document.querySelector('svg')
  expect(el).toBeDefined()
})
