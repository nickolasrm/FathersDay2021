import React, { useState } from 'react'
import { ImageSection } from '../../../interfaces/SectionData'
import Image from '../../atoms/Image'
import Comment from '../../molecules/Comment'
import SectionContainer, { SectionContainerProps } from '../../atoms/SectionContainer'
import Style from './style.module.css'

interface ImagesSectionProps extends SectionContainerProps {
  images: ImageSection[]
}

/** Holds and displays multiple images and comments in slide style. */
const ImagesSection: React.FC<ImagesSectionProps> = (props) => {
  const [pictureIndex, setPictureIndex] = useState(0)

  /** Handler that increases PictureIndex */
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    setPictureIndex(pictureIndex + 1)
  }

  /** Checks if an element is the last of the images array */
  const isLast = (index: number) => {
    if ((index + 1) === props?.images?.length) return true
    else return false
  }

  return (<SectionContainer className={Style.Container + ' ' + (props.className || '')}
    color={props.color}
    backgroundColor={props.backgroundColor}>
    <div style={{
      width: `${props.images.length}00%`,
      transform: `translate(-${pictureIndex}00vw, 0%)`
    }}
      className={Style.ImagesContainer}>
      {props.images.map((el, index) => {
        return (<div key={index}
          className={Style.ImageContainer}
          style={{
            transform: `translate(${index}00vw, 0%)`
          }}>
          <Image className={Style.Image}
            file={el.image}
            alt="A picture of my father" />
          <Comment onClick={isLast(index)
            ? undefined
            : handleClick}
            backgroundColor='white'
            className={Style.Comment}
            text={el.comment}
            isLast={isLast(index)} />
        </div>)
      })}
    </div>
  </SectionContainer>)
}

export default ImagesSection
