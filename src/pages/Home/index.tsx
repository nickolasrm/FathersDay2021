import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import TextSection from '../../components/organisms/TextSection'

const Home: React.FC = (props) => {
  return (
    <HomeTemplate
      title="A new concept of car"
      credits="Love you."

      gearTitle="443HP"
      gearSubtitle="An example of power"
      lightningTitle="Electric"
      lightningSubtitle="Always available"
      selfDrivenTitle="Self Driven"
      selfDrivenSubtitle="Takes care of you"

      profileImage="test.png"
      profileName="Father"
      profileDescription={'[name] is our favorite first and unique project.' +
        ' We combined its [profession-adjective] with love to provide' +
        'you the most trustable product.'}

      message="Lorem Ipsum"

      imageSections={[
        { image: 'test.png', comment: 'Testing' },
        { image: 'test.png', comment: 'Testing' }
      ]} >
      <TextSection text="Testing" />
    </HomeTemplate >
  )
}

export default Home
