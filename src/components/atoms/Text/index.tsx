import React from 'react'
import Style from './style.module.css'

interface TextProps {
  className?: string
}

/** Styled p */
const Text: React.FC<TextProps> = (props) => {
  return (<p className={Style.Text + ' ' + (props.className || '')}>
    {props.children}
  </p>)
}

export default Text
