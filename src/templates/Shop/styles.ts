import styled from 'styled-components'

export const Wrapper = styled.main`
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin: 0 auto;
  width: 80%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Aside = styled.aside`
  padding: 1rem 4rem;
  height: fit-content;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2dedc;
  opacity: 1;
  display: grid;
  gap: 1rem;

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

export const AsideListGender = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    list-style: none;
  }

  button {
    font-size: 14px;
    background: #ef476f;
    color: white;
    border: 1px solid #ef476f;
    border-radius: 0.5rem;
    opacity: 1;
    font-weight: 300;
    padding: 0.75rem;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const AsideColor = styled.ul`
  list-style: none;
  list-style: none;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 10%;
`

export const RedButton = styled.button`
  background: #cb0d1f 0% 0% no-repeat padding-box;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const BlackButton = styled.button`
  background: black;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const YellowButton = styled.button`
  background: #ffb703;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const GrayButton = styled.button`
  background: #8d99ae;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const BlueButton = styled.button`
  background: #0077b6;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const PinkButton = styled.button`
  background: #ff006e;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const BeigeButton = styled.button`
  background: #ddb892;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const OrangeButton = styled.button`
  background: #f26324 0% 0% no-repeat padding-box;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const GreenButton = styled.button`
  background: #27a3a9 0% 0% no-repeat padding-box;
  border: none;
  width: 48px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`

export const PageContainer = styled.span`
  margin: 0 auto;
  width: 80%;
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

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const GridItem = styled.div`
  margin-block: 1rem;
  text-align: center;
`

export const Card = styled.div`
  text-align: center;
`

export const CardTitle = styled.h2`
  letter-spacing: 0px;
  color: #626262;
  opacity: 1;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  margin-block: 0.25rem;
`

export const Price = styled.p`
  letter-spacing: 0px;
  color: #1e2b50;
  opacity: 1;
  font-size: 21px;
  font-weight: 800;
  margin-block: 0.25rem;
`

export const ButtonBuy = styled.button`
  background: #00a8a9 0% 0% no-repeat padding-box;
  border: 1px solid #00a8a9;
  border-radius: 5px;
  opacity: 1;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  font-size: 18px;
  width: -webkit-fill-available;
  padding: 0.75rem;
  margin-block: 0.25rem;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: color 0.3s ease;
  }
`
export const ImageContainer = styled.div`
  border: 1px solid #e2dedc;
  opacity: 1;
`

export const GridButtons = styled.div`
  display: grid;
  gap: 0.75rem;
`
