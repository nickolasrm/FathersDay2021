import React, { useCallback, useState } from 'react'
import TextSection from '../../components/organisms/TextSection'
import TitleSection from '../../components/organisms/TitleSection'
import ContentSection from '../../components/organisms/ContentSection'
import ProfileSection from '../../components/organisms/ProfileSection'
import Feature from '../../components/molecules/Feature'
import { Cpu, LightningCharge, GearWideConnected } from 'react-bootstrap-icons'
import ImagesSection from '../../components/organisms/ImagesSection'
import { ImageSection } from '../../interfaces/SectionData'
import { Spring } from 'react-spring'
import useTypewriter from '../../hooks/useTypewriter'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  /** Visibility states */
  const [isFeaturesSectionVisible, setFeaturesSectionVisible] = useState(false)
  const handleFeaturesSectionVisible = () => setFeaturesSectionVisible(true)

  /** Base animation for features */
  const featureAnim = {
    from: {
      transform: 'scale(0)'
    },
    to: {
      transform: 'scale(1)'
    }
  }

  /** Typewritter animated texts */
  const titleText = useTypewriter(props.title)

  const readyToMeetItText = useTypewriter(t('ready_to_meet'), { autostart: false })
  const handleReadyToMeetSectionVisible = () => readyToMeetItText.setStarted(true)

  const meetFatherTitle = useTypewriter(t('meet') + props.profileName, {
    autostart: false,
    startsAt: t('meet').length
  })
  const meetFatherText = useTypewriter(props.profileDescription, {
    autostart: false,
    startsAt: 0,
    interval: 5,
    delay: 100 * props.profileName.length
  })
  const handleMeetFatherSectionVisible = () => {
    meetFatherTitle.setStarted(true)
    meetFatherText.setStarted(true)
  }

  const picturesMoreThanWordsText = useTypewriter(t('pictures_more_than_words'), {
    autostart: false
  })
  const handlePicturesMoreThanWordsSectionVisible = () => picturesMoreThanWordsText.setStarted(true)

  const creditsText = useTypewriter(props.credits, { autostart: false })
  const handleCreditsSectionVisible = () => creditsText.setStarted(true)

  const messageText = useTypewriter(props.message, { autostart: false })
  const handleMessageSectionVisible = () => messageText.setStarted(true)

  return (<>
    <TitleSection title={titleText.text}
      color='white'
      backgroundColor='var(--loading-background)' />

    <ContentSection color='white'
      backgroundColor='var(--loading-background)'
      onVisible={handleFeaturesSectionVisible}>
      {isFeaturesSectionVisible
        ? <>
          <Spring {...featureAnim}>
            {anim =>
              <Feature style={anim}
                title={props.gearTitle}
                subtitle={props.gearSubtitle}>
                <GearWideConnected />
              </Feature>
            }
          </Spring>
          <Spring {...{ ...featureAnim, delay: 400 }}>
            {anim =>
              <Feature style={anim}
                title={props.lightningTitle}
                subtitle={props.lightningSubtitle}>
                <LightningCharge />
              </Feature>
            }
          </Spring>
          <Spring {...{ ...featureAnim, delay: 800 }}>
            {anim =>
              <Feature style={anim}
                title={props.selfDrivenTitle}
                subtitle={props.selfDrivenSubtitle}>
                <Cpu />
              </Feature>
            }
          </Spring>
        </>
        : <></>}
    </ContentSection>

    <TitleSection onVisible={handleReadyToMeetSectionVisible}
      title={readyToMeetItText.text} />

    <ProfileSection image={props.profileImage}
      onVisible={handleMeetFatherSectionVisible}
      name={meetFatherTitle.text}
      description={meetFatherText.text} />

    <TitleSection title={picturesMoreThanWordsText.text}
      onVisible={handlePicturesMoreThanWordsSectionVisible} />

    <ImagesSection images={props.imageSections} />

    <TextSection text={messageText.text}
      onVisible={handleMessageSectionVisible} />

    <TitleSection title={creditsText.text} last={true}
      onVisible={handleCreditsSectionVisible} />
  </>)
}

export default HomeTemplate
