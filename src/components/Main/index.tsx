import * as S from './styles'

const Main = ({
  description = 'A simple project starter to work with TypeScript, React, NextJS and Styled Components'
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
