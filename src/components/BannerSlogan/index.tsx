import React from 'react'
import * as S from './styles'

interface IBannerSlogan {
  title: string
  subTitle: string
}

const BannerSlogan: React.FC<IBannerSlogan> = ({ title, subTitle }) => {
  return (
    <S.Container>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.Box>
    </S.Container>
  )
}

export default BannerSlogan
