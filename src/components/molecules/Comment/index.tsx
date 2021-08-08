import React from 'react'
import GoDownButton from '../GoDownButton'
import GoRightButton from '../GoRightButton'
import Style from './style.module.css'

interface CommentProps {
  className?: string,
  text: string,
  backgroundColor?: string,
  /** What will happen user clicks arrow right button */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Replaces arrow right for an ArrowDown */
  isLast: boolean
}

const Comment: React.FC<CommentProps> = (props) => {
  return (<div style={{ backgroundColor: props.backgroundColor || 'white' }}
    className={Style.Container + ' ' + (props.className || '')}>
    <p className={Style.Comment}>{props.text}</p>
    {props.isLast
      ? <GoDownButton onClick={props.onClick} />
      : <GoRightButton onClick={props.onClick} />}
  </div>)
}

export default Comment
