import React from 'react'
import Style from './style.module.css'

interface ImageProps {
  className?: string,
  file: string,
  alt: string
}

/** A cover image with src pointed to public/images */
const Image: React.FC<ImageProps> = (props) => {
  return (<img className={Style.Image + ' ' + (props.className || '')}
    src={'images/' + props.file}
    alt={props.alt} />)
}

export default Image
