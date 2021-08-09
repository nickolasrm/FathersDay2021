import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer, { SectionContainerProps } from '../../atoms/SectionContainer'
import Title from '../../atoms/Title'
import Style from './style.module.css'

interface TitleSectionProps extends SectionContainerProps {
  title: string,
  /** Removes GoDownButton if true */
  last?: boolean,
}

/** Section used to display a title only */
const TitleSection: React.FC<TitleSectionProps> = (props) => {
  return (<SectionContainer onVisible={props.onVisible}
    className={props.className || ''}
    color={props.color}
    backgroundColor={props.backgroundColor}>
    <Title className={Style.Title}>{props.title}</Title>
    {!props.last && <GoDownButton />}
  </SectionContainer>)
}

export default TitleSection
