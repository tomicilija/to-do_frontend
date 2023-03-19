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
  h5 {
    width: 100%;
    margin-top: 20vh;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }
  h6 {
    width: 100%;
    margin-top: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    span {
      color: #619b8a;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    margin: 0;
    padding: 30px;
  }
`

export const TaskList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 50px;
  }

  @media (max-width: 900px) {
    margin-bottom: 0;
    h4 {
      margin-bottom: 20px;
    }
  }
`

export const Tittle = styled.div`
  position: relative;
  width: 100%;
  h4 {
    text-align: start;
    span {
      color: #619b8a;
    }
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
    h4 {
      margin-left: 10px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
  }
`
