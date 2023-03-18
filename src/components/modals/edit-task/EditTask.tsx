import React from 'react'
import { FC, useContext, useEffect, useState, useCallback } from 'react'
import { AddTaskProps, EditTaskProps, TasksI, UserI, UsersI } from '../../../interfaces/TaskInterfaces'
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
} from './EditTask.style'
import { Label, Input } from 'reactstrap'
import { addTask, getAllUsers, signUp, updateTask } from '../../../api/TaskApi'
import { Link } from 'react-router-dom'

const EditTask: FC<EditTaskProps> = ({ isAddTaskOpen, setIsAddTaskOpen, taskId, taskTitle, taskDesc }) => {
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
      await updateTask(
        {
          title: formData.title,
          description: formData.description,
        },
        taskId,
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
                <h3>Edit Task</h3>
                <SettingsForm>
                  <SettingsSection>
                    <Label for='title'>Task</Label>
                    <Input
                      type='text'
                      name='title'
                      id='title'
                      required
                      placeholder={taskTitle}
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
                      placeholder={taskDesc}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </SettingsSection>
                </SettingsForm>
                <button type='submit'>Edit Task</button>
                <button onClick={closeAddTaskModal}>Close</button>
              </form>
            </Wrapper>
          ) : null}
        </Container>
      ) : null}
    </>
  )
}

export default EditTask
