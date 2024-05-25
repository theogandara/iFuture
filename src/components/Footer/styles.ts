import theme from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
  padding-top: 24px;
  padding-bottom: 24px;
`

export const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.textWhite};
`
