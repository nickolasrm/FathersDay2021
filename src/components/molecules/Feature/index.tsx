import React from 'react'
import FeatureTitle from '../../atoms/FeatureTitle'
import Text from '../../atoms/Text'
import Style from './style.module.css'

interface FeatureProps {
  title: string,
  subtitle: string
}

const Feature: React.FC<FeatureProps> = (props) => {
  return (<div className={Style.Feature}>
    {props.children}
    <FeatureTitle>{props.title}</FeatureTitle>
    <Text>{props.subtitle}</Text>
  </div>)
}

export default Feature
