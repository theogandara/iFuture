import React from 'react'
import * as S from './styles'

interface IPill extends React.HTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

const Pill: React.FC<IPill> = ({ isSelected = false, ...props }) => {
  return <S.ButtonPill isSelected={isSelected} {...props} />
}

export default Pill
