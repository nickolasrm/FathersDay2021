import React from 'react'
import IconButtonContainer from '../../atoms/IconButtonContainer'
import { ArrowRight } from 'react-bootstrap-icons'

interface GoRightButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
  size?: number
}

/** Button containing a triangle and scrolls page down if onClick not defined */
const GoRightButton: React.FC<GoRightButtonProps> = (props) => {
  /** Scrolls page down in viewport height pixels */
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    window.scrollTo(window.scrollX + document.documentElement.clientWidth, window.scrollY)
  }

  return (<IconButtonContainer onClick={props.onClick || handleClick}>
    <ArrowRight size={props.size}></ArrowRight>
  </IconButtonContainer>)
}

export default GoRightButton
