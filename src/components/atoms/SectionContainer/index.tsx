import React from 'react'
import Style from './style.module.css'

interface SectionContainerProps {
  color?: string,
  backgroundColor?: string,
  className?: string
}

const SectionContainer: React.FC<SectionContainerProps> = (props) => {
  return (<section style={{
    backgroundColor: props.backgroundColor || 'white',
    color: props.color || 'black'
  }}
    className={Style.Container + ' ' + (props.className || '')}>
    {props.children}
  </section>)
}

export default SectionContainer
