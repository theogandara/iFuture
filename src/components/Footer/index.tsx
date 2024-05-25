import React from 'react'
import * as S from './styles'

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <S.Container>
      <S.P>iFuture © 2022</S.P>
    </S.Container>
  )
}

export default Footer
