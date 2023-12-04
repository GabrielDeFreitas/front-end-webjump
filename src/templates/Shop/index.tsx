import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useListItems from '../../hooks/useListItems'
import useCategoryItems from '../../hooks/useCategoryItems'
import Image from 'next/image'
import Link from 'next/link'
import Orderby from 'components/Orderby'

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

  useEffect(() => {
    const category = categories.find((item) => item.path === categoryName)
    if (category) {
      setCategoryDisplayName(category.name)
    }
  }, [categoryName, categories])

  useEffect(() => {
    setListItems(categoryItems)
  }, [categoryItems])

  const handleOrderBy = (criteria: string) => {
    const sortedItems = [...listItems]

    if (criteria === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name))
    } else if (criteria === 'price') {
      sortedItems.sort((a, b) => a.price - b.price)
    }

    setListItems(sortedItems)
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
              <S.OrangeButton></S.OrangeButton>
            </li>
            <li>
              <S.GreenButton></S.GreenButton>
            </li>
            <li>
              <S.BlackButton></S.BlackButton>
            </li>
            <li>
              <S.YellowButton></S.YellowButton>
            </li>
            <li>
              <S.GrayButton></S.GrayButton>
            </li>
            <li>
              <S.BlueButton></S.BlueButton>
            </li>
            <li>
              <S.PinkButton></S.PinkButton>
            </li>
            <li>
              <S.BeigeButton></S.BeigeButton>
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
          <S.AsideList>
            <li>
              <Link href="/">Masculino</Link>
            </li>
            <li>
              <Link href="/">Feminino</Link>
            </li>
          </S.AsideList>
        </S.Aside>
        <S.Section>
          <S.Article>
            <S.Title>{categoryDisplayName}</S.Title>
            <Orderby handleOrderBy={handleOrderBy} />
            <S.Hr />
            <S.GridContainer>
              {listItems.map((item) => (
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
              ))}
            </S.GridContainer>
          </S.Article>
        </S.Section>
      </S.Wrapper>
    </>
  )
}

export default ShopTemplate
