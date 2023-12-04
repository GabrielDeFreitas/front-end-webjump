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
        <S.LogoNavbar>
          <Image src="/assets/logo.PNG" width={190} height={50} />
        </S.LogoNavbar>
        <S.ShopIcon>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            {' '}
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              fill="#000000"
            ></path>{' '}
          </svg>
        </S.ShopIcon>
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
