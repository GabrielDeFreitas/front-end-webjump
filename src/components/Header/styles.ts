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
  width: 90%;
  padding-block: 0.75rem;
  display: flex;
  justify-content: end;
  gap: 0.75rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
