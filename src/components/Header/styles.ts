import styled from 'styled-components'

export const Container = styled.div`
  min-width: 375px;
  width: 100vw;
  height: 68px;
  display: flex;
  justify-content: center;
  padding: 24px;

  @media (min-width: 1366px) {
    height: 88px;
    padding: 32px;
  }
`

export const ContainerImage = styled.div`
  width: 120px;
  height: 20px;

  @media (min-width: 1366px) {
    width: 144px;
    height: 24px;
  }
`
