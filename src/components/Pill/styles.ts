import theme from '@styles/theme'
import styled from 'styled-components'

export const ButtonPill = styled.button<{ isSelected: boolean }>`
  background-color: ${props =>
    props.isSelected ? theme.colors.primary : 'transparent'};
  border: 2px solid ${theme.colors.primary};
  border-radius: 24px;
  cursor: pointer;
  color: ${props =>
    props.isSelected ? theme.colors.textWhite : theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 6px 24px;
  border-box: box-sizing;
`
