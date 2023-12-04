import Link from 'next/link'
import * as S from './styles'
import NavBar from 'components/NavBar'
import Image from 'next/image'

const Header = () => (
  <S.Header>
    <S.AccountLinks>
      <S.Container>
        <Link href="/">Acesse sua Conta</Link>
        <S.Span>ou</S.Span>
        <Link href="/">Cadastre-se</Link>
      </S.Container>
    </S.AccountLinks>
    <S.LogoContainer>
      <Image src="/assets/logo.PNG" width={190} height={70} />
      <S.InputsSearch>
        <input type="text" />
        <button>Buscar</button>
      </S.InputsSearch>
    </S.LogoContainer>
    <NavBar />
  </S.Header>
)

export default Header
