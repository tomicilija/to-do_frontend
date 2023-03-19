import styled from 'styled-components'

/* Navigation */
export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;

  @media (max-width: 900px) {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    background-color: white;
  }
`

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 50px 70px;
  width: 100%;

  @media (max-width: 900px) {
    position: relative;
    padding: 30px 35px;
    padding-bottom: 5px;
  }
  @media (max-width: 350px) {
    justify-content: flex-start;
    padding: 20px;
  }
`

export const Logo = styled.div`
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  filter: blur(2px);
  a {
    color: #000000;
  }
  span {
    color: #699f89;
  }

  &.showLogo {
    display: flex;
  }
  &.hideLogo {
    display: none;
  }
  @media (max-width: 900px) {
    padding-right: 40%;
  }
  @media (max-width: 500px) {
    padding-right: 25%;
  }
  @media (max-width: 350px) {
    padding-right: 40%;
    transform: scale(0.7);
    width: 50%;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: -100px;
  @media (max-width: 900px) {
    margin-top: 30px;
    margin-left: 0px;
    padding: 10px;
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    width: 100%;

    &.showMenuNav {
      display: flex;
    }
    &.hideMenuNav {
      display: none;
    }
  }
`

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 50px;
  div {
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0px;
    width: 100%;
  }
`

export const BurgerMenu = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  right: 35px;
  top: 35px;
  padding: 4px 2px;
  gap: 5px;
  cursor: pointer;

  span {
    justify-content: flex-end;
    width: 25px;
    height: 2px;
    background: linear-gradient(90deg, #659e89 0%, #619b8a 32.12%, #a1c181 100%);
    transition: all 0.15s linear;
    transform-origin: 2.5px;
    &.burger {
      display: flex;
    }
    &.xmark {
      :first-child {
        transform: rotate(45deg);
      }

      :nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }

      :nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
  @media (max-width: 900px) {
    display: flex;
  }
`


export const MobileLink = styled.div`
  display: none;
  padding: 0px;
  width: 100%;

  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      white-space: nowrap;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #699f89;
      cursor: pointer;
    }
  }
`

export const DesktopLink = styled.div`
  display: flex;
  padding: 0px;
  cursor: pointer;
  p {
    white-space: nowrap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #699f89;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
