import React from 'react'
import Style from './style.module.css'

/** Title used by a feature */
const FeatureTitle: React.FC = (props) => {
  return (<h2 className={Style.FeatureTitle}>{props.children}</h2>)
}

export default FeatureTitle
