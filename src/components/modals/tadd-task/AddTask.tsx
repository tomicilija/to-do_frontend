import React from 'react'
import { FC, useContext, useEffect, useState, useCallback } from 'react'
import { AddTaskProps, UserI, UsersI } from '../../../interfaces/TaskInterfaces'
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
} from './AddTask.style'
import { Label, Input } from 'reactstrap'
import { addTask, getAllUsers, signUp } from '../../../api/TaskApi'
import { Link } from 'react-router-dom'

const AddTask: FC<AddTaskProps> = ({ isAddTaskOpen, setIsAddTaskOpen }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  const [users, setUsers] = useState<UsersI[]>([])

  const fetchUsers = useCallback(async () => {
    setUsers(await getAllUsers())
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const closeAddTaskModal = () => {
    setIsAddTaskOpen(false)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await addTask(
        {
          title: formData.title,
          description: formData.description,
        },
        JSON.parse(localStorage.getItem('userId')!),
      )
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <>
      {isAddTaskOpen ? (
        <Container>
          {isAddTaskOpen ? (
            <Wrapper>
              <form onSubmit={handleSubmit}>
                <SettingsForm>
                  <SettingsSection>
                    <Label for='title'>Task</Label>
                    <Input
                      type='text'
                      name='title'
                      id='title'
                      required
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </SettingsSection>
                  <SettingsSection>
                    <Label for='description'>Description</Label>
                    <Input
                      type='textarea'
                      name='description'
                      id='description'
                      required
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </SettingsSection>
                </SettingsForm>
                <button type='submit'>Add New Task</button>
                <button onClick={closeAddTaskModal}>Close</button>
              </form>
            </Wrapper>
          ) : null}
        </Container>
      ) : null}
    </>
  )
}

export default AddTask
