import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer from '../../atoms/SectionContainer'
import Title from '../../atoms/Title'
import Style from './style.module.css'

interface TitleSectionProps {
  title: string,
  color?: string,
  backgroundColor?: string,
  last?: boolean,
  onVisible?: () => void
}

const TitleSection: React.FC<TitleSectionProps> = (props) => {
  return (<SectionContainer onVisible={props.onVisible}
    color={props.color}
    backgroundColor={props.backgroundColor}>
    <Title className={Style.Title}>{props.title}</Title>
    {!props.last && <GoDownButton />}
  </SectionContainer>)
}

export default TitleSection
