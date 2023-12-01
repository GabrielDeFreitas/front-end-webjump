import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Navbar>
      <S.MenuToggle onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </S.MenuToggle>
      <S.NavLinks isOpen={isOpen ? 1 : 0}>
        <ul>
          <li>
            <Link href="/">PÁGINA INICIAL</Link>
          </li>
          <li>
            <Link href="/produto/camisetas">CAMISETAS</Link>
          </li>
          <li>
            <Link href="/produto/calcas">CALÇAS</Link>
          </li>
          <li>
            <Link href="/produto/sapatos">SAPATOS</Link>
          </li>
          <li>
            <Link href="/">CONTATO</Link>
          </li>
        </ul>
      </S.NavLinks>
    </S.Navbar>
  )
}

export default NavBar
