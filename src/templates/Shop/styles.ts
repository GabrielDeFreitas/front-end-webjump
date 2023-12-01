import styled from 'styled-components'

export const Wrapper = styled.main`
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  margin: 0 auto;
  width: 90%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Aside = styled.aside`
  padding: 1rem 4rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2dedc;
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

export const Article = styled.article``

export const Title = styled.h1`
  text-align: left;
  letter-spacing: 0px;
  color: #cb0d1f;
  opacity: 1;
  font-size: 32px;
  text-transform: capitalize;
  font-weight: 400;
`

export const AsideTitle = styled.h1`
  text-align: left;
  letter-spacing: 0px;
  color: #ed1a39;
  opacity: 1;
  font-size: 24px;
`

export const AsideSubTitle = styled.h2`
  text-align: left;
  letter-spacing: 0px;
  color: #1e2b50;
  opacity: 1;
  font-size: 18px;
`
export const AsideList = styled.ul`
  color: #626262;

  li a {
    font-size: 16px;
    text-align: left;
    letter-spacing: 0px;
    color: #626262;
    opacity: 1;
    font-weight: 300;
  }
  li a:hover {
    text-decoration: underline;
    transition: color 0.3s ease;
  }
`
export const AsideColor = styled.ul`
  list-style: none;
  list-style: none;
  display: flex;
  gap: 0.25rem;
`

export const RedButton = styled.button`
  background: #cb0d1f 0% 0% no-repeat padding-box;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
`

export const OrangeButton = styled.button`
  background: #f26324 0% 0% no-repeat padding-box;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
`

export const GreenButton = styled.button`
  background: #27a3a9 0% 0% no-repeat padding-box;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
`

export const PageContainer = styled.span`
  margin: 0 auto;
  width: 90%;
  display: block;
  margin-block: 2rem;
  font-size: 14px;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  color: #00a8a9;
  font-weight: 400;
`

export const PageInit = styled.span`
  text-align: left;
  letter-spacing: 0px;
  color: #cb0d1f;
  text-transform: capitalize;
`

export const Hr = styled.hr`
  background: #e2dedc 0% 0% no-repeat padding-box;
  border: 1px solid #e2dedc;
  opacity: 1;
  margin-block: 2rem;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`