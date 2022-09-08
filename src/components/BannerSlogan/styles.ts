import styled from 'styled-components'
import theme from '@styles/theme'

export const Container = styled.main`
  min-width: 100vw;
  height: 223px;
  color: ${theme.colors.textWhite};
  background-color: ${theme.colors.primary};

  @media (min-width: 1024px) {
    height: 213px;
  }

  @media (min-width: 1366px) {
    height: 188px;
  }
`

export const Box = styled.div`
  padding: 32px 24px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1024px) {
    padding-top: 56px;
    max-width: 700px;
  }

  @media (min-width: 1366px) {
    padding-top: 44px;
    max-width: 620px;
  }
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`
export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 24px;
`
