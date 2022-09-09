import React from 'react'
import * as S from './styles'

interface IInput extends React.HTMLProps<HTMLInputElement> {
  placeholder: string
  label: string
  register: any
  name: string
  errorMessage?: string
  maxLength?: number
  counter?: number
}

const Input: React.FC<IInput> = ({
  placeholder,
  label,
  register,
  name,
  errorMessage,
  counter,
  maxLength = 200,
  ...props
}) => {
  return (
    <>
      <S.Label>
        {label}
        <S.Input
          {...register(name)}
          placeholder={placeholder}
          maxLength={maxLength}
          {...props}
        />
      </S.Label>

      <S.FeedBackContainer>
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
        {counter && (
          <S.CounterMaxLagth>
            {counter}/{maxLength}
          </S.CounterMaxLagth>
        )}
      </S.FeedBackContainer>
    </>
  )
}

export default Input
