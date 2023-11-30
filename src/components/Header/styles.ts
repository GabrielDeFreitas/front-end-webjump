import styled from 'styled-components'

export const Header = styled.header``

export const AccountLinks = styled.div`
  background-color: #231f20;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }

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
