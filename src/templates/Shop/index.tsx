import React from 'react'
import Link from 'next/link'
import * as S from './styles'

interface ShopTemplateProps {
  categoryName: string
}

const ShopTemplate: React.FC<ShopTemplateProps> = ({ categoryName }) => {
  return (
    <>
      <S.PageContainer>
        Página inicial <S.PageInit>{categoryName}</S.PageInit>
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
            <S.Title>{categoryName}</S.Title>
            <S.Hr />
            <S.GridContainer>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
              <S.GridItem>2</S.GridItem>
            </S.GridContainer>
          </S.Article>
        </S.Section>
      </S.Wrapper>
    </>
  )
}

export default ShopTemplate
