import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer, { SectionContainerProps } from '../../atoms/SectionContainer'
import Text from '../../atoms/Text'
import Style from './style.module.css'

interface TextSectionProps extends SectionContainerProps {
  text: string,
}

/** A section used to display a long text message */
const TextSection: React.FC<TextSectionProps> = (props) => {
  return (<SectionContainer className={Style.Container + ' ' + (props.className || '')}
    onVisible={props.onVisible}
    color={props.color}
    backgroundColor={props.backgroundColor}>
    <Text className={Style.Text}>{props.text}</Text>
    <GoDownButton />
  </SectionContainer>)
}

export default TextSection
