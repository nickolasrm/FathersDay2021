import React from 'react'
import Style from './style.module.css'

const FeatureTitle: React.FC = (props) => {
  return (<h2 className={Style.FeatureTitle}>{props.children}</h2>)
}

export default FeatureTitle
