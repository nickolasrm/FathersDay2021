import React from 'react'
import TextSection from '../../components/organisms/TextSection'
import TitleSection from '../../components/organisms/TitleSection'
import ContentSection from '../../components/organisms/ContentSection'
import ProfileSection from '../../components/organisms/ProfileSection'
import { ImageSection } from '../../interfaces/SectionData'
import Feature from '../../components/molecules/Feature'
import { Cpu, LightningCharge, GearWideConnected } from 'react-bootstrap-icons'
import ImagesSection from '../../components/organisms/ImagesSection'

interface HomeTemplateProps {
  /** Text displayed into the first section */
  title: string,

  /** Image filename located at public/images to be displayed into the profile section */
  profileImage: string,
  /** Name of the person profile */
  profileName: string,
  /** Description of the person profile */
  profileDescription: string,

  /** Gear feature title for the features section */
  gearTitle: string,
  /** Gear feature subtitle for the features section */
  gearSubtitle: string,
  /** Lightning feature title for the features section */
  lightningTitle: string,
  /** Lightning feature subtitle for the features section */
  lightningSubtitle: string,
  /** Self driven feature title for the features section */
  selfDrivenTitle: string,
  /** Self driven feature subtitle for the features section */
  selfDrivenSubtitle: string,

  /** Array of image section data */
  imageSections: ImageSection[]
  /** A large message to be displayed into the section before the last */
  message: string,

  /** Text displayed into the last section */
  credits: string
}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (<>
    <TitleSection title={props.title} color='white' backgroundColor='#212121' />
    <ContentSection color='white' backgroundColor='#212121'>
      <Feature title={props.gearTitle} subtitle={props.gearSubtitle}>
        <GearWideConnected />
      </Feature>
      <Feature title={props.lightningTitle} subtitle={props.lightningSubtitle}>
        <LightningCharge />
      </Feature>
      <Feature title={props.selfDrivenTitle} subtitle={props.selfDrivenSubtitle}>
        <Cpu />
      </Feature>
    </ContentSection>
    <TitleSection title="Ready to meet it?" />
    <ProfileSection image={props.profileImage}
      name={'Meet ' + props.profileName}
      description={props.profileDescription} />
    <TitleSection title="We find pictures express more than words!" />
    <ImagesSection images={props.imageSections} />
    <TextSection text={props.message} />
    <TitleSection title={props.credits} last={true} />
  </>)
}

export default HomeTemplate
