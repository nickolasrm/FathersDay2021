import React, { useEffect, useRef } from 'react'
import Style from './style.module.css'
import useScrollPosition from '@react-hook/window-scroll'

interface SectionContainerProps {
  color?: string,
  backgroundColor?: string,
  className?: string,
  onVisible?: () => void
}

const SectionContainer: React.FC<SectionContainerProps> = (props) => {
  const sectionRef = useRef<HTMLElement>(null)

  const { onVisible } = props

  /** Checks if a section is visible */
  const scrollY = useScrollPosition(5)
  useEffect(() => {
    const threshold = 10
    if (onVisible &&
      sectionRef.current &&
      sectionRef.current.offsetTop <= (scrollY + threshold)) onVisible()
  }, [scrollY, sectionRef, onVisible])

  return (<section ref={sectionRef}
    style={{
      backgroundColor: props.backgroundColor || 'white',
      color: props.color || 'black'
    }}
    className={Style.Container + ' ' + (props.className || '')}>
    {props.children}
  </section>)
}

export default SectionContainer
