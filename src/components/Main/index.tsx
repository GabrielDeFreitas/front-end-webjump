import * as S from './styles'

const Main = ({
  description = 'Desafio Front-end da WebJump utilizando Typescript, React, NextJS e Styled Components.'
}) => (
  <S.Wrapper>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with code."
    />
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
