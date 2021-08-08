import React from 'react'
import Style from './style.module.css'

interface ProfileImageProps {
  className?: string,
  /** Image filename located at public/images */
  file: string,
  /** Image alternative text for sr */
  alt: string
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  return (<img className={Style.Image + ' ' + (props.className || '')}
    src={'images/' + props.file}
    alt={props.alt}></img>)
}

export default ProfileImage
