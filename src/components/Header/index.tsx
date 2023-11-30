import Link from 'next/link'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <S.AccountLinks>
      <Link href="/">Acesse sua Conta</Link>
      <S.Span>ou</S.Span>
      <Link href="/">Cadastre-se</Link>
    </S.AccountLinks>
  </S.Header>
)

export default Header
