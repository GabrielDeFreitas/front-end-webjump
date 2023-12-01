import styled from 'styled-components'

export const Wrapper = styled.main`
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  //padding: 20px;
  margin: 0 auto;
  width: 90%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Aside = styled.aside`
  padding: 1rem 4rem;
  background: #e2dedc 0% 0% no-repeat padding-box;
  opacity: 1;

  a {
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
  }

  li {
    margin-block: 1rem;
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: 16px;
    }
  }
`

export const Section = styled.section``

export const Banner = styled.article`
  background: #acacac 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 16rem;
`

export const Article = styled.article``

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-block: 0.75rem;
`

export const Content = styled.p`
  font-size: 16px;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`
