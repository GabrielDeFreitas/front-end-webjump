import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cb0d1f;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-block: 0.25rem;
  margin-block: 1.25rem;
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
    font-size: 16px;
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

  @media screen and (max-width: 1000px) {
    a {
      font-size: 14px;
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
    background-color: #fff;
    margin: 3px 0;
    transition: transform 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
