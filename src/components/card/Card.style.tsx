import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  word-break: break-all;

  margin-left: 20px;
  margin-bottom: 20px;
  padding: 16px 32px 16px 16px;
  gap: 21px;
  width: 320px;
  min-height: 115px;
  :hover {
    -ms-transform: scale(1.02);
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
  &.todo {
    color: rgb(0, 0, 0);
  }
  &.complete {
    color: rgba(0, 0, 0, 0.3);
  }

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
    max-width: 300px;
    min-height: 120px;
    border-radius: 16px;
    margin-left: 0px;
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
  cursor: grab;

  width: 100%;

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
`

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 30px;
  margin: 10px;
  height: 25px;
  width: 25px;
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
  width: 25px;
  height: 25px;
`
