import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer, { SectionContainerProps } from '../../atoms/SectionContainer'
import Style from './style.module.css'

/** A blank section used to add custom children */
const ContentSection: React.FC<SectionContainerProps> = (props) => {
  return (<SectionContainer onVisible={props.onVisible}
    color={props.color}
    backgroundColor={props.backgroundColor}
    className={Style.Container + ' ' + (props.className || '')}>
    <div className={Style.ChildrenContainer}>
      {props.children}
    </div>
    <GoDownButton />
  </SectionContainer>)
}

export default ContentSection
