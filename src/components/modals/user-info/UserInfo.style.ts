import styled from 'styled-components'

//Backgorund
export const Container = styled.div`
  position: absolute;
  width: 110%;
  height: 500%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: -10%;

  @media (max-width: 900px) {
    width: 110%;
    margin-left: -13%;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 400px;
  min-height: 300px;
  margin-top: 80vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffff;

  z-index: 10;
  border-radius: 4px;
  h3 {
    margin-bottom: 25px;
  }

  form {
    width: 100%;
    gap: 16px;
  }

  @media (max-width: 900px) {
    width: 80%;
    gap: 16px;
    height: auto;
    max-width: auto;
    margin: 80vh auto 0 auto;
  }

  @media (max-width: 300px) {
    width: 90%;
    height: auto;
    max-width: auto;
    margin: 85 vh 0 0 -20px;
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
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  gap: 8px;
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: 900px) {
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  border-bottom: 1px solid #669f89;
  :hover {
    box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 900px) {
  }
`

export const Profile = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
`

export const Delete = styled.button`
  margin: 5px;
  height: 20px;
  width: 20px;
  border: 0;
  cursor: pointer;
  background-color: white;

  @media (max-width: 900px) {
  }
`
export const Icon = styled.div`
  position: relative;
  background: no-repeat;
  background-size: cover;
  display: flex;
  width: 20px;
  height: 20px;
`
