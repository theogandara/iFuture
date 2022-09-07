import React from 'react'
import * as S from './styles'

interface IHeader {
  children: React.ReactNode
}

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <S.Container>
      <S.ContainerImage>{children}</S.ContainerImage>
    </S.Container>
  )
}

export default Header
