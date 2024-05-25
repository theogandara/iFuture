import React from 'react'
import * as S from './styles'

interface ITitle extends React.HTMLAttributes<HTMLParagraphElement> {}

const Title: React.FC<ITitle> = ({ ...props }) => {
  return <S.P {...props} />
}

export default Title
