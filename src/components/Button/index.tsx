import React from 'react'
import * as S from './styles'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButton> = ({ ...props }) => {
  return <S.Button {...props} />
}

export default Button
