import React from 'react'
import Link from 'next/link'
import * as S from './styles'

interface LayoutTemplateProps {
  title: string
  body: string
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ title, body }) => {
  return (
    <>
      <S.Wrapper>
        <S.Aside>
          <ul>
            <li>
              <Link href="/">Página Inicial</Link>
            </li>
            <li>
              <Link href="/produto/camisetas">Camisetas</Link>
            </li>
            <li>
              <Link href="/produto/calcas">Calças</Link>
            </li>
            <li>
              <Link href="/produto/sapatos">Sapatos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </S.Aside>
        <S.Section>
          <S.Banner></S.Banner>
          <S.Article>
            <S.Title>{title}</S.Title>
            <S.Content>{body}</S.Content>
          </S.Article>
        </S.Section>
      </S.Wrapper>
    </>
  )
}

export default LayoutTemplate
