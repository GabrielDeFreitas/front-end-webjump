import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'
import useListItems from '../../hooks/useListItems'

interface ShopTemplateProps {
  categoryName: string
}

const ShopTemplate: React.FC<ShopTemplateProps> = ({ categoryName }) => {
  const listItems = useListItems()
  const [categoryDisplayName, setCategoryDisplayName] = useState('')

  useEffect(() => {
    const category = listItems.find((item) => item.path === categoryName)
    if (category) {
      setCategoryDisplayName(category.name)
    }
  }, [categoryName, listItems])

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
              <S.GridItem>
                <S.Card>
                  <S.ImageContainer>
                    <Image
                      src="/media/shoes-8.jpg"
                      width={300}
                      height={300}
                      alt="calças"
                    />
                  </S.ImageContainer>
                  <S.CardTitle>TÊNIS ADIDAS</S.CardTitle>
                  <S.Price>R$299,90</S.Price>
                  <S.ButtonBuy>Comprar</S.ButtonBuy>
                </S.Card>
              </S.GridItem>

              <S.GridItem>
                <S.Card>
                  <S.ImageContainer>
                    <Image
                      src="/media/shoes-8.jpg"
                      width={300}
                      height={300}
                      alt="calças"
                    />
                  </S.ImageContainer>
                  <S.CardTitle>TÊNIS ADIDAS</S.CardTitle>
                  <S.Price>R$299,90</S.Price>
                  <S.ButtonBuy>Comprar</S.ButtonBuy>
                </S.Card>
              </S.GridItem>
            </S.GridContainer>
          </S.Article>
        </S.Section>
      </S.Wrapper>
    </>
  )
}

export default ShopTemplate
