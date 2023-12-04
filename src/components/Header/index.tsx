import { useState, useRef, useEffect } from 'react'
import * as S from './styles'
import Image from 'next/image'
import useCategoryItems from 'hooks/useCategoryItems'
import NavBar from 'components/NavBar'
import Link from 'next/link'

interface ListItem {
  id: number
  name: string
  image: string
}

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState<ListItem[]>([])
  const [notFound, setNotFound] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const listItems1 = useCategoryItems('1')
  const listItems2 = useCategoryItems('2')
  const listItems3 = useCategoryItems('3')

  const handleSearch = () => {
    const items = [...listItems1, ...listItems2, ...listItems3]
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResult(filteredItems)
    setNotFound(filteredItems.length === 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    if (e.target.value === '') {
      setSearchResult([])
      setNotFound(false)
    } else {
      handleSearch()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setSearchResult([])
      setNotFound(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
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
        <S.InputsSearch ref={dropdownRef}>
          <input type="text" value={searchTerm} onChange={handleInputChange} />
          <button>Buscar</button>
          {searchTerm !== '' && searchResult.length > 0 && (
            <S.Dropdown>
              {searchResult.map((item) => (
                <div key={item.id}>
                  <ul>
                    <li>
                      <Image src={item.image} width={50} height={50} />
                      <div>{item.name}</div>
                    </li>
                  </ul>
                </div>
              ))}
            </S.Dropdown>
          )}
          {notFound && (
            <S.Dropdown>
              <span>Item não encontrado</span>
            </S.Dropdown>
          )}
        </S.InputsSearch>
      </S.LogoContainer>
      <NavBar />
    </S.Header>
  )
}

export default Header
