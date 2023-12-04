// NavBar.tsx
import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'
import useListItems from 'hooks/useListItems'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const listItems = useListItems()

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
    </S.Navbar>
  )
}

export default NavBar
