import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer from '../../atoms/SectionContainer'
import Style from './style.module.css'

interface ContentSectionProps {
  color?: string,
  backgroundColor?: string,
  onVisible?: () => void
}

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  return (<SectionContainer onVisible={props.onVisible}
    color={props.color}
    backgroundColor={props.backgroundColor}
    className={Style.Container}>
    <div className={Style.ChildrenContainer}>
      {props.children}
    </div>
    <GoDownButton />
  </SectionContainer>)
}

export default ContentSection
