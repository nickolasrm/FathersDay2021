import React from 'react'
import IconButtonContainer from '../../atoms/IconButtonContainer'
import { ArrowRight } from 'react-bootstrap-icons'

interface GoRightButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
  size?: number
}

const GoRightButton: React.FC<GoRightButtonProps> = (props) => {
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    window.scrollTo({
      left: window.scrollX + window.innerWidth,
      top: window.scrollY,
      behavior: 'smooth'
    })
  }

  return (<IconButtonContainer onClick={props.onClick || handleClick}>
    <ArrowRight size={props.size}></ArrowRight>
  </IconButtonContainer>)
}

export default GoRightButton
