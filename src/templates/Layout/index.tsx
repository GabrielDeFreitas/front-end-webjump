import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import useListItems from 'hooks/useListItems'

interface LayoutTemplateProps {
  title: string
  body: string
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ title, body }) => {
  const listItems = useListItems()

  return (
    <>
      <S.Wrapper>
        <S.Aside>
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
