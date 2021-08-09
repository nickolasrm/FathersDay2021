import React from 'react'
import { CaretDownFill } from 'react-bootstrap-icons'
import IconButtonContainer from '../../atoms/IconButtonContainer'

interface GoDownButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void,
  size?: number
}

const GoDownButton: React.FC<GoDownButtonProps> = (props) => {
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    window.scrollTo(window.scrollX, window.scrollY + document.documentElement.clientHeight)
  }

  return (
    <IconButtonContainer onClick={props.onClick || handleClick}>
      <CaretDownFill size={props.size} />
    </IconButtonContainer>
  )
}

export default GoDownButton
