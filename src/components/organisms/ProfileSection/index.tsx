import React from 'react'
import GoDownButton from '../../molecules/GoDownButton'
import SectionContainer from '../../atoms/SectionContainer'
import Text from '../../atoms/Text'
import Style from './style.module.css'
import ProfileImage from '../../atoms/ProfileImage'
import Title from '../../atoms/Title'

interface ProfileSectionProps {
  /** Image filename located at public/images */
  image: string,

  name: string,
  description: string,
  color?: string,
  backgroundColor?: string
}

const TextSection: React.FC<ProfileSectionProps> = (props) => {
  return (<SectionContainer className={Style.Container}
    color={props.color}
    backgroundColor={props.backgroundColor}>
    <ProfileImage className={Style.Image} file={props.image} alt="Profile picture of [NAME]" />
    <Title className={Style.Title}>{props.name}</Title>
    <Text className={Style.Text}>{props.description}</Text>
    <GoDownButton />
  </SectionContainer>)
}

export default TextSection
