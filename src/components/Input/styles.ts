import theme from '@styles/theme'
import styled from 'styled-components'

export const Label = styled.label`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.text};
`

export const Input = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  height: 48px;
  padding: 12px;
  margin-top: 5px;
  outline: none;
  border-radius: 4px;
  border: 1px solid ${theme.colors.grey};

  &:hover {
    outline: 1px solid ${theme.colors.grey};
  }

  &:focus {
    outline: 1px solid ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.placeholder};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`

export const FeedBackContainer = styled.div`
  position: relative;
`
export const Error = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.colors.error};
`

export const CounterMaxLagth = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.colors.primary};
  position: absolute;
  right: 0;
`
