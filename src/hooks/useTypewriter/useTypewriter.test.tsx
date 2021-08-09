import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import useTypewriter, { TypewriterProps } from './index'

const HookTest: React.FC<TypewriterProps> = (props) => {
  const { text, setStarted } = useTypewriter('Test', props)

  return <span data-testid="el"
    onClick={() => { setStarted(true) }}>{text}</span>
}

const wait = async (time: number) => new Promise(resolve => { setTimeout(resolve, time) })

test('useTypewriter text changing', async () => {
  render(<HookTest interval={100} />)
  const el = await screen.findByTestId('el')
  expect(el.innerHTML).toBe('')
  await wait(101)
  expect(el.innerHTML).toBe('T')
})

test('useTypewriter autostart', async () => {
  render(<HookTest autostart={false} interval={10} />)
  const el = await screen.findByTestId('el')
  await wait(30)
  expect(el.innerHTML).toBe('')
  fireEvent.click(el)
  await wait(11)
  expect(el.innerHTML).toBe('T')
})

test('useTypewriter delay', async () => {
  render(<HookTest interval={10} delay={50} />)
  const el = await screen.findByTestId('el')
  await wait(150)
  expect(el.innerHTML.length).not.toBe(0)
})

test('useTypewriter startsAt', async () => {
  render(<HookTest interval={50} startsAt={2} />)
  const el = await screen.findByTestId('el')
  expect(el.innerHTML).toBe('Te')
})
