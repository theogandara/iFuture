import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  width: 327px;
  margin-top: 32px;

  @media (min-width: 1024px) {
    margin-top: 48px;
    width: 700px;
  }

  @media (min-width: 1366px) {
    width: 620px;
  }
`
