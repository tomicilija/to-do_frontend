import React, { FC, useContext, useState } from 'react'
import { AddTaskProps } from '../../../interfaces/TaskInterfaces'
import { Container, Wrapper, SettingsForm, SettingsSection, Buttons, Button } from './AddTask.style'
import { Label, Input } from 'reactstrap'
import { addTask } from '../../../api/TaskApi'
import { UpdateContext } from '../../../utils/UpdateContext'

const AddTask: FC<AddTaskProps> = ({ isAddTaskOpen, setIsAddTaskOpen }) => {
  const userId = localStorage.getItem('userId')
  const { updated, setUpdated } = useContext(UpdateContext)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  const closeAddTaskModal = () => {
    setIsAddTaskOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (userId) {
        await addTask(
          {
            title: formData.title,
            description: formData.description,
          },
          JSON.parse(userId),
        )
        setIsAddTaskOpen(false)
        setUpdated(!updated)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {isAddTaskOpen ? (
        <Container>
          <Wrapper>
            <form onSubmit={handleSubmit}>
              <h3>Add Task</h3>
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
              <Buttons>
                <Button type='submit'>Add New Task</Button>
                <Button onClick={closeAddTaskModal}>Close</Button>
              </Buttons>
            </form>
          </Wrapper>
        </Container>
      ) : null}
    </>
  )
}

export default AddTask
