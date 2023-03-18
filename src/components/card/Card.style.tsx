import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  margin-left: 20px;
  margin-bottom: 20px;
  padding: 16px 32px 16px 16px;
  gap: 21px;
  width: 320px;
  min-height: 115px;

  @media (max-width: 900px) {
    max-width: 300px;
    min-height: 120px;
    border-radius: 16px;
    margin-left: 0px;
    word-break: break-all;
  }

  @media (max-width: 370px) {
    width: 70vw;
  }
`

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 21px;

  width: 100%;

  .task-complete {
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    height: 25px;
    width: 25px;
    accent-color: #699f89;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 90px;
  }
`

export const TaskTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;

  color: #000000;

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 20px;
  }
`

export const TaskDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 20px;
  }
`

export const TaskAuthor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  text-align: right;
  padding: 0px;
  gap: 10px;

  cursor: pointer;

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 24px;
  }
`

export const AuthorName = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.4px;

  color: #000000;
`
