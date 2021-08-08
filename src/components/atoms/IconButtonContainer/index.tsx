import React from 'react'
import Style from './style.module.css'

interface GoDownButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
}

const GoDownButton: React.FC<GoDownButtonProps> = (props) => {
  return (
    <div className={Style.Container} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default GoDownButton
