import React from 'react'
import * as S from './styles'

interface IPill extends React.HTMLAttributes<HTMLButtonElement> {}

const Pill: React.FC<IPill> = ({ ...props }) => {
  return <S.ButtonPill {...props} />
}

export default Pill
