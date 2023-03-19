import React, { FC, useContext, useEffect, useState, useCallback } from 'react'
import { UserInfoProps, UsersI } from '../../../interfaces/TaskInterfaces'
import {
  Container,
  Wrapper,
  SettingsForm,
  SettingsSection,
  Buttons,
  Button,
  Table,
  Row,
  Profile,
  Icon,
  Delete,
} from './UserInfo.style'
import { Label, Input } from 'reactstrap'
import { deleteUser, getAllUsers, signUp } from '../../../api/TaskApi'
import { UpdateContext } from '../../../utils/UpdateContext'

const UserInfo: FC<UserInfoProps> = ({ isUserInfoOpen, setIsUserInfoOpen }) => {
  const { updated, setUpdated } = useContext(UpdateContext)
  const [users, setUsers] = useState<UsersI[]>([])
  const [formData, setFormData] = useState({
    name: '',
  })
  const closeUserInfoModal = () => {
    setIsUserInfoOpen(false)
  }

  const fetchUsers = useCallback(async () => {
    setUsers(await getAllUsers())
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (formData) {
        await signUp({
          name: formData.name,
        })
        setUpdated(!updated)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (id: string) => {
    localStorage.setItem('userId', JSON.stringify(id))
    setUpdated(!updated)
    setIsUserInfoOpen(false)
  }

  const handleDelete = async (id: string) => {
    await deleteUser(id).catch((err) => {
      console.log('Error: Cant delete user. \n' + err)
      alert("Can't delete user!\nUser stil has avtive tasks!")
    })
    setUpdated(!updated)
  }

  useEffect(() => {
    fetchUsers().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [updated])

  return (
    <>
      {isUserInfoOpen ? (
        <Container>
          <Wrapper>
            <form onSubmit={handleSubmit}>
              <h3>Edit Task</h3>
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
              <Buttons>
                <Button type='submit'>Add User</Button>
                <Button onClick={closeUserInfoModal}>Close</Button>
              </Buttons>
            </form>
            Select User:
            <Table>
              {users.map((user, index) => (
                  <Row key={index}>
                    <Profile onClick={() => handleClick(user.id)}>{user.name}</Profile>
                    <Delete onClick={() => handleDelete(user.id)}>
                      <Icon
                        style={{
                          backgroundImage:
                            'url(' + 'https://www.svgrepo.com/show/21045/delete-button.svg' + ')',
                        }}
                      />
                    </Delete>
                  </Row>
              ))}
            </Table>
          </Wrapper>
        </Container>
      ) : null}
    </>
  )
}

export default UserInfo
