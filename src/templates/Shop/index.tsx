import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useListItems from '../../hooks/useListItems'
import useCategoryItems from '../../hooks/useCategoryItems'
import Image from 'next/image'
import Link from 'next/link'
import Orderby from 'components/Orderby'
import NoResults from 'components/NoResults'

interface ShopTemplateProps {
  categoryName: string
}

interface PathToIdMap {
  [key: string]: number
}

interface Item {
  id: number
  name: string
  image: string
  price: number
  filter?: { gender: string; color?: string }[]
}

const pathToIdMap: PathToIdMap = {
  camisetas: 1,
  calcas: 2,
  calcados: 3
}

const ShopTemplate: React.FC<ShopTemplateProps> = ({ categoryName }) => {
  const categories = useListItems()
  const categoryId = pathToIdMap[categoryName as keyof PathToIdMap] || 0
  const categoryItems = useCategoryItems(
    categoryId ? categoryId.toString() : ''
  )

  const [categoryDisplayName, setCategoryDisplayName] = useState('')
  const [listItems, setListItems] = useState<Item[]>([])
  const [filteredItems, setFilteredItems] = useState<Item[]>([])
  const [genderFilter, setGenderFilter] = useState<string>('')

  useEffect(() => {
    const category = categories.find((item) => item.path === categoryName)
    if (category) {
      setCategoryDisplayName(category.name)
    }
  }, [categoryName, categories])

  useEffect(() => {
    setListItems(categoryItems)
    setFilteredItems(categoryItems)
  }, [categoryItems])

  const handleOrderBy = (criteria: string) => {
    const sortedItems = [...filteredItems]

    if (criteria === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name))
    } else if (criteria === 'price') {
      sortedItems.sort((a, b) => a.price - b.price)
    }

    setFilteredItems(sortedItems)
  }

  const filterByGender = (gender: string) => {
    if (gender === 'Masculina' || gender === 'Feminina') {
      const filtered = listItems.filter((item) => {
        return item.filter && item.filter.some((f) => f.gender === gender)
      })
      setGenderFilter(gender)
      setFilteredItems(filtered)
    } else {
      setGenderFilter('')
      setFilteredItems(listItems)
    }
  }

  const [colorFilter, setColorFilter] = useState<string>('')

  const filterByColor = (color: string) => {
    const filtered = listItems.filter((item) => {
      return item.filter && item.filter.some((f) => f.color === color)
    })

    setColorFilter(color)
    setFilteredItems(filtered)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return (
    <>
      <S.PageContainer>
        Página inicial - <S.PageInit>{categoryDisplayName}</S.PageInit>
      </S.PageContainer>
      <S.Wrapper>
        <S.Aside>
          <S.AsideTitle>FILTRE POR</S.AsideTitle>
          <S.AsideSubTitle>CATEGORIAS</S.AsideSubTitle>
          <S.AsideList>
            <li>
              <Link href="/">Roupas</Link>
            </li>
            <li>
              <Link href="/">Sapatos</Link>
            </li>
            <li>
              <Link href="/">Acessórios</Link>
            </li>
          </S.AsideList>

          <S.AsideSubTitle>CORES</S.AsideSubTitle>
          <S.AsideColor>
            <li>
              <S.BlackButton
                onClick={() => filterByColor('Preto')}
              ></S.BlackButton>
            </li>
            <li>
              <S.YellowButton
                onClick={() => filterByColor('Amarela')}
              ></S.YellowButton>
            </li>
            <li>
              <S.GrayButton
                onClick={() => filterByColor('Cinza')}
              ></S.GrayButton>
            </li>
            <li>
              <S.BlueButton
                onClick={() => filterByColor('Azul')}
              ></S.BlueButton>
            </li>
            <li>
              <S.PinkButton
                onClick={() => filterByColor('Rosa')}
              ></S.PinkButton>
            </li>
            <li>
              <S.BeigeButton
                onClick={() => filterByColor('Bege')}
              ></S.BeigeButton>
            </li>
          </S.AsideColor>

          <S.AsideSubTitle>Tipo</S.AsideSubTitle>
          <S.AsideList>
            <li>
              <Link href="/">Corrida</Link>
            </li>
            <li>
              <Link href="/">Caminhada</Link>
            </li>
            <li>
              <Link href="/">Casual</Link>
            </li>
            <li>
              <Link href="/">Social</Link>
            </li>
          </S.AsideList>
          <S.AsideSubTitle>Gênero</S.AsideSubTitle>
          <S.AsideListGender>
            <li>
              <button onClick={() => filterByGender('Todos')}>Todos</button>
            </li>
            <li>
              <button onClick={() => filterByGender('Masculina')}>
                Masculino
              </button>
            </li>
            <li>
              <button onClick={() => filterByGender('Feminina')}>
                Feminino
              </button>
            </li>
          </S.AsideListGender>
        </S.Aside>
        <S.Section>
          <S.Article>
            <S.Title>{categoryDisplayName}</S.Title>
            <Orderby handleOrderBy={handleOrderBy} />
            <S.Hr />
            <S.GridContainer>
              {currentItems.length === 0 ? (
                <NoResults />
              ) : (
                currentItems.map((item) => (
                  <S.GridItem key={item.id}>
                    <S.Card>
                      <S.ImageContainer>
                        <Image
                          src={item.image}
                          width={300}
                          height={300}
                          alt={item.name}
                        />
                      </S.ImageContainer>
                      <S.GridButtons>
                        <S.CardTitle>{item.name}</S.CardTitle>
                        <S.Price>R${item.price.toFixed(2)}</S.Price>
                        <S.ButtonBuy>Comprar</S.ButtonBuy>
                      </S.GridButtons>
                    </S.Card>
                  </S.GridItem>
                ))
              )}
            </S.GridContainer>
            {filteredItems.length > itemsPerPage && (
              <S.PaginationContainer>
                <S.PaginationButton
                  disabled={currentPage === 1}
                  onClick={prevPage}
                >
                  {'<'}
                </S.PaginationButton>
                <S.PaginationButton
                  disabled={indexOfLastItem >= filteredItems.length}
                  onClick={nextPage}
                >
                  {'>'}
                </S.PaginationButton>
              </S.PaginationContainer>
            )}
          </S.Article>
        </S.Section>
      </S.Wrapper>
    </>
  )
}

export default ShopTemplate
