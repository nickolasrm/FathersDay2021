import React from 'react'
import { CaretDownFill } from 'react-bootstrap-icons'
import IconButtonContainer from '../../atoms/IconButtonContainer'

interface GoDownButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void,
  size?: number
}

/** Button containing a triangle and scrolls page down if onClick not defined */
const GoDownButton: React.FC<GoDownButtonProps> = (props) => {
  /** Scrolls page down in viewport height pixels */
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
