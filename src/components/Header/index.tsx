import Link from 'next/link'
import * as S from './styles'
import NavBar from 'components/NavBar'

const Header = () => (
  <S.Header>
    <S.AccountLinks>
      <Link href="/">Acesse sua Conta</Link>
      <S.Span>ou</S.Span>
      <Link href="/">Cadastre-se</Link>
    </S.AccountLinks>
    <NavBar />
  </S.Header>
)

export default Header
