import React from 'react'
import FeatureTitle from '../../atoms/FeatureTitle'
import Text from '../../atoms/Text'
import Style from './style.module.css'
import { animated } from 'react-spring'

interface FeatureProps {
  title: string,
  subtitle: string,
  style?: object
}

/** An title and subtitle container for children description */
const Feature: React.FC<FeatureProps> = (props) => {
  return (<animated.div style={props.style} className={Style.Feature}>
    {props.children}
    <FeatureTitle>{props.title}</FeatureTitle>
    <Text>{props.subtitle}</Text>
  </animated.div>)
}

export default Feature
