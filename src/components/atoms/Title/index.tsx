import React from 'react'
import Style from './style.module.css'

interface TitleProps {
  className?: string
}

/** Styled h1 */
const Title: React.FC<TitleProps> = (props) => {
  return (<h1 className={Style.Title + ' ' + (props.className || '')}>
    {props.children}
  </h1>)
}

export default Title
