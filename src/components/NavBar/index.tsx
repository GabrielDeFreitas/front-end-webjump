// NavBar.tsx
import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'
import useListItems from 'hooks/useListItems'
import Image from 'next/image'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const listItems = useListItems()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Navbar>
      <S.Container>
        <S.MenuToggle onClick={handleToggle}>
          <div></div>
          <div></div>
          <div></div>
        </S.MenuToggle>
        <S.NavLinks isOpen={isOpen ? 1 : 0}>
          <ul>
            <li>
              <Link href="/">Página Inicial</Link>
            </li>
            {listItems.map((item) => (
              <li key={item.id}>
                <Link href={`/produto/${item.path}`}>{item.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </S.NavLinks>
      </S.Container>
    </S.Navbar>
  )
}

export default NavBar
