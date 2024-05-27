import React from 'react'
import * as S from './styles'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

const Button: React.FC<IButton> = ({ disabled, ...props }) => {
  return <S.Button disabled={disabled} {...props} />
}

export default Button
