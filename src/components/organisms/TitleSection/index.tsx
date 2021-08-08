import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer from '../../atoms/SectionContainer'
import Title from '../../atoms/Title'

interface TitleSectionProps {
  title: string,
  color?: string,
  backgroundColor?: string,
  last?: boolean
}

const TitleSection: React.FC<TitleSectionProps> = (props) => {
  return (<SectionContainer color={props.color} backgroundColor={props.backgroundColor}>
    <Title>{props.title}</Title>
    {!props.last && <GoDownButton />}
  </SectionContainer>)
}

export default TitleSection
