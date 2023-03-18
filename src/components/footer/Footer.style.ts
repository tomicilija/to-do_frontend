import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
  padding: 20px 70px;
  width: 100%;

  background: #619b8a;
  border-radius: 0px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-end;
    align-content: flex-end;
    align-items: center;
    padding: 0 20px;

    margin-top: 50px;

    height: 65px;
  }
`

export const LogoText = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  filter: blur(1px);
  color: #000000;
  span {
    color: #ffffff;
  }

  @media (max-width: 900px) {
    font-weight: 400;
    font-size: 20px;
  }
`

export const Rights = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: right;

  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #ffffff;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    }
  }
`
