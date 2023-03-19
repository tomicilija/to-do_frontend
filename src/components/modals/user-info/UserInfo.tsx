import React from 'react'
import { FC, useContext, useEffect, useState, useCallback } from 'react'
import { UserI, UserInfoProps, UsersI } from '../../../interfaces/TaskInterfaces'
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

  const handleDelete = async (id: string) => {
    await deleteUser(id).catch((err) => {
      console.log('Error: Cant delete task. \n' + err)
    })
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
            Or Select Added User:
            <Table>
              {users.map((user) => (
                <>
                  <Row>
                    <Profile
                      onClick={() => localStorage.setItem('userId', JSON.stringify(user.id))}
                    >
                      {user.name}
                    </Profile>
                    <Delete onClick={() => handleDelete(user.id)}>
                      <Icon
                        style={{
                          backgroundImage:
                            'url(' + 'https://www.svgrepo.com/show/21045/delete-button.svg' + ')',
                        }}
                      />
                    </Delete>
                  </Row>
                </>
              ))}
            </Table>
          </Wrapper>
        </Container>
      ) : null}
    </>
  )
}

export default UserInfo
