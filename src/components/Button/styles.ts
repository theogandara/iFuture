import theme from '@styles/theme'
import styled from 'styled-components'

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 12px 20px;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  &:disabled {
    background-color: ${theme.colors.disabled};
    cursor: not-allowed;
  }
`
