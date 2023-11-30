import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cb0d1f;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const NavLinks = styled.div`
  margin-block: 1rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin-left: 20px;
  }

  a {
    font-size: 16px;
    text-align: center;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    text-decoration: none;
    font-weight: 700;
  }

  a:hover {
    color: #adb5bd;
    transition: color 0.3s ease;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ul {
      flex-direction: column;
      align-items: flex-start;
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
