import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer from '../../atoms/SectionContainer'
import Text from '../../atoms/Text'
import Style from './style.module.css'

interface TextSectionProps {
  text: string,
  color?: string,
  backgroundColor?: string,
  onVisible?: () => void
}

const TextSection: React.FC<TextSectionProps> = (props) => {
  return (<SectionContainer className={Style.Container}
    onVisible={props.onVisible}
    color={props.color}
    backgroundColor={props.backgroundColor}>
    <Text className={Style.Text}>{props.text}</Text>
    <GoDownButton />
  </SectionContainer>)
}

export default TextSection
