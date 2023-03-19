import styled from 'styled-components'

//Backgorund
export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 500px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffff;

  z-index: 10;
  border-radius: 4px;

  form {
    width: 100%;
    gap: 16px;
  }
  h3 {
    margin-bottom: 25px;
  }

  @media (max-width: 900px) {
    width: 80%;
    gap: 16px;
    height: auto;
    max-width: auto;
    margin: auto;
  }
`

export const SettingsForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const SettingsSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  label {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
  input {
    display: flex;
    width: 100%;
    height: 20px;
    flex-direction: row;
    align-items: center;

    background: #ffffff;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    padding: 5px;
    :focus {
      border-bottom: 2px solid #000000;
    }
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
  button {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    cursor: pointer;
  }
  a {
    width: 100%;
  }
  p {
    cursor: pointer;
    :nth-child(3) {
      color: red;
      align-self: flex-end;
    }
  }

  @media (max-width: 900px) {
    p {
      :nth-child(3) {
        margin-top: 30px;
      }
    }
  }
`

export const Buttons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  width: 100%;
  margin: 20px 0;
  gap: 20px;
  @media (max-width: 900px) {
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  padding: 8px 16px;
  width: auto;
  height: 40px;
  cursor: pointer;
  border-width: 1px;
  border-radius: 5px;
  background-color: #fff;
  :nth-child(1) {
    color: #fff;
    background-color: #669f89;
    border: 0;
  }

  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 900px) {
  }
`
