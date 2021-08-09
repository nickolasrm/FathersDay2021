import React from 'react'
import Style from './style.module.css'

interface GoDownButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
}

/** Holds an icon and styles it */
const GoDownButton: React.FC<GoDownButtonProps> = (props) => {
  return (
    <div data-testid="btn-container"
      className={Style.Container}
      onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default GoDownButton
