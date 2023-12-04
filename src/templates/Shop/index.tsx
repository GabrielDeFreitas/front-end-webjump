import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useListItems from '../../hooks/useListItems'
import useCategoryItems from '../../hooks/useCategoryItems'
import Image from 'next/image'
import Link from 'next/link'

interface ShopTemplateProps {
  categoryName: string
}

interface PathToIdMap {
  [key: string]: number
}

const pathToIdMap: PathToIdMap = {
  camisetas: 1,
  calcas: 2,
  calcados: 3
}

const ShopTemplate: React.FC<ShopTemplateProps> = ({ categoryName }) => {
  const categories = useListItems()
  const categoryId = pathToIdMap[categoryName as keyof PathToIdMap] || 0
  const listItems = useCategoryItems(categoryId ? categoryId.toString() : '')

  const [categoryDisplayName, setCategoryDisplayName] = useState('')

  useEffect(() => {
    const category = categories.find((item) => item.path === categoryName)
    if (category) {
      setCategoryDisplayName(category.name)
    }
  }, [categoryName, categories])

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
              <S.RedButton></S.RedButton>
            </li>
            <li>
              <S.OrangeButton></S.OrangeButton>
            </li>
            <li>
              <S.GreenButton></S.GreenButton>
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
        </S.Aside>
        <S.Section>
          <S.Article>
            <S.Title>{categoryDisplayName}</S.Title>
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
                    <S.CardTitle>{item.name}</S.CardTitle>
                    <S.Price>R${item.price.toFixed(2)}</S.Price>
                    <S.ButtonBuy>Comprar</S.ButtonBuy>
                    <span>{item.path}</span>
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
