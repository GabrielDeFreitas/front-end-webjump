import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cb0d1f;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffff;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-block: 0.25rem;
  margin-block: 1.25rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
  }
`

export const LogoNavbar = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const NavLinks = styled.div`
  ul {
    display: inline-flex;
    gap: 8rem;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
  }

  a {
    font-size: 15px;
    text-align: center;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
  }

  a:hover {
    color: #adb5bd;
    transition: color 0.3s ease;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: 14px;
      color: #231f20;
    }
  }

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    li {
      margin: 10px 0;
    }
  }
`

export const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 3px 0;
    transition: transform 0.3s ease-in-out;
    background: #231f20;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const ShopIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
