import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import { useTranslation } from 'react-i18next'

const Home: React.FC = (props) => {
  const { t } = useTranslation()

  return (
    <HomeTemplate
      title={t('title')}
      credits={t('credits')}

      gearTitle={t('features.1.title')}
      gearSubtitle={t('features.1.subtitle')}
      lightningTitle={t('features.2.title')}
      lightningSubtitle={t('features.2.subtitle')}
      selfDrivenTitle={t('features.3.title')}
      selfDrivenSubtitle={t('features.3.subtitle')}

      profileImage={t('profile.image')}
      profileName={t('profile.name')}
      profileDescription={t('profile.description')}

      message={t('message')}

      imageSections={[
        { image: t('images.1.image'), comment: t('images.1.comment') },
        { image: t('images.2.image'), comment: t('images.2.comment') },
        { image: t('images.3.image'), comment: t('images.3.comment') },
        { image: t('images.4.image'), comment: t('images.4.comment') },
        { image: t('images.5.image'), comment: t('images.5.comment') },
        { image: t('images.6.image'), comment: t('images.6.comment') },
        { image: t('images.7.image'), comment: t('images.7.comment') }
      ]} >
    </HomeTemplate >
  )
}

export default Home
