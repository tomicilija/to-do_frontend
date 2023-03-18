import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 63px);

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    min-height: calc(100vh - 190px);
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  text-align: start;

  padding: 50px;
  margin-top: 120px;
  width: 100%;

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    margin: 0;
    padding: 30px;
  }
`

export const BestGuesses = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  h5 {
    margin-bottom: 50px;
  }

  @media (max-width: 900px) {
    margin-bottom: 0;
    h5 {
      margin-bottom: 20px;
    }
  }
`

export const Tittle = styled.div`
  position: relative;
  width: 100%;
  h5 {
    text-align: start;
    color: #619b8a;
    font-size: 26px;
    margin-bottom: 20px;
    margin-left: 25px;
  }
  p {
    text-align: start;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    h5 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
  }
`

export const ProfileBanner = styled.div`
  position: relative;
  width: 100%;
  margin-top: 120px;
  padding: 50px;
  gap: 24px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: center;
  align-content: center;
  text-align: center;

  @media (max-width: 900px) {
    margin-top: 20px;
    padding: 30px;
  }
`

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;

  background: #ffffff;
  border-radius: 64px;
  border: none;
  img {
    height: 70px;
    width: 70px;
    border-radius: 64px;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    height: 60px;
    width: 60px;
    img {
      height: 60px;
      width: 60px;
    }
  }
`

export const ProfileInfo = styled.div`
  gap: 24px;
  @media (max-width: 900px) {
  }
`

export const ProfileName = styled.div`
  letter-spacing: 0.25px;
  @media (max-width: 900px) {
    h4 {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
  }
`

export const NotFound = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    letter-spacing: 0.25px;
    text-align: center;
    margin: 20px;
    color: #e59967;
  }
  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin: 20px;
    color: #000000;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    h1 {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #e59967;
    }
    p {
      width: 300px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }
  }
`

export const LoadMore = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;

  width: 130px;
  height: 40px;

  border: 1px solid #669f89;
  border-radius: 4px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;

  color: #619b8a;

  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`
