import styled from 'styled-components'

export const Header = styled.header`
  margin-bottom: 3.7rem;
`

export const AccountLinks = styled.div`
  background-color: #231f20;
  font-size: 14px;

  a {
    color: #ffffff;
  }

  a:hover {
    color: #adb5bd;
    transition: color 0.3s ease;
  }
`

export const Span = styled.span`
  color: #ffffff;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-block: 0.75rem;
  display: flex;
  justify-content: end;
  gap: 0.75rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const LogoContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const InputsSearch = styled.div`
  input {
    height: 4rem;
    width: 320px;
    border: 1px solid #959595;
    padding: 1rem;
  }
  button {
    color: #ffffff;
    font: 16px;
    text-transform: uppercase;
    background: #00a8a9;
    border: 1px solid #00a8a9;
    padding: 1.25rem;
    cursor: pointer;
  }

  button:hover {
    transition: color 0.3s ease;
    opacity: 0.6;
  }
`

export const Dropdown = styled.div`
  background: #ffffff;
  width: auto;
  z-index: 999;
  position: absolute;
  height: 200px;
  overflow-y: auto;

  span {
    font-size: 16px;
    font-weight: 600;
  }

  ul li {
    list-style: none;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ul li:hover {
    background: #9c9ea138;
    transition: color 0.3s ease;
  }

  ul li div {
    font-size: 16px;
    font-weight: 600;
  }
`
