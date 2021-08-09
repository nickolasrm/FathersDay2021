import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import useTypewriter, { TypewriterProps } from './index'

const HookTest: React.FC<TypewriterProps> = (props) => {
  const { text, setStarted } = useTypewriter('Test', props)

  return <span data-testid="el"
    onClick={() => { setStarted(true) }}>{text}</span>
}

const timer = async (time: number) => new Promise(resolve => { setTimeout(resolve, time) })

test('useTypewriter text changing', async () => {
  await act(async () => {
    render(<HookTest interval={20} />)
    const el = await screen.findByTestId('el')
    expect(el.innerHTML).toBe('')
    await timer(40)
    expect(el.innerHTML).not.toBe('')
  })
})

test('useTypewriter autostart', async () => {
  await act(async () => {
    render(<HookTest autostart={false} interval={10} />)
    const el = await screen.findByTestId('el')
    await timer(30)
    expect(el.innerHTML).toBe('')
    fireEvent.click(el)
    await timer(20)
    expect(el.innerHTML).not.toBe('')
  })
})

test('useTypewriter delay', async () => {
  await act(async () => {
    render(<HookTest interval={10} delay={50} />)
    const el = await screen.findByTestId('el')
    await timer(150)
    expect(el.innerHTML.length).not.toBe(0)
  })
})

test('useTypewriter startsAt', async () => {
  await act(async () => {
    render(<HookTest interval={20} startsAt={2} />)
    const el = await screen.findByTestId('el')
    expect(el.innerHTML).toBe('Te')
  })
})
