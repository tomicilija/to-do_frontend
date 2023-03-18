import React from 'react'
import { FC, useContext, useEffect, useState, useCallback } from 'react'
import { UserI, UserInfoProps, UsersI } from '../../../interfaces/TaskInterfaces'
import {
  Container,
  Wrapper,
  SettingsHeader,
  SettingsForm,
  SettingsSection,
  TwoInRow,
  ChangeSetings,
  Image,
  UploadImage,
  Buttons,
  Button,
  ConfirmationWrapper,
  Warning,
  Peek,
  PeekImg,
} from './UserInfo.style'
import { Label, Input } from 'reactstrap'
import { getAllUsers, signUp } from '../../../api/TaskApi'
import { Link } from 'react-router-dom'

const UserInfo: FC<UserInfoProps> = ({ isUserInfoOpen, setIsUserInfoOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
  })
  const [users, setUsers] = useState<UsersI[]>([])

  const fetchUsers = useCallback(async () => {
    setUsers(await getAllUsers())
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const closeUserInfoModal = () => {
    setIsUserInfoOpen(false)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signUp({
        name: formData.name,
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [fetchUsers, users])

  return (
    <>
      {isUserInfoOpen ? (
        <Container>
          {isUserInfoOpen ? (
            <Wrapper>
              <form onSubmit={handleSubmit}>
                <SettingsForm>
                  <SettingsSection>
                    <Label for='name'>Name</Label>
                    <Input
                      type='text'
                      name='name'
                      id='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </SettingsSection>
                </SettingsForm>
                <button type='submit'>Add User</button>
                <button onClick={closeUserInfoModal}>Close</button>
              </form>
              {localStorage.getItem("userId")}
              {users.map((user) => (
                <>
                    <p onClick={()=> localStorage.setItem("userId",JSON.stringify(user.id))} >{user.name}</p>
                </>
              ))}
            </Wrapper>
          ) : null}
        </Container>
      ) : null}
    </>
  )
}

export default UserInfo
