import React, { FC, useContext, useState } from 'react'
import {
  EditTaskProps,
} from '../../../interfaces/TaskInterfaces'
import {
  Container,
  Wrapper,
  SettingsForm,
  SettingsSection,
  Buttons,
  Button,
} from './EditTask.style'
import { Label, Input } from 'reactstrap'
import { updateTask } from '../../../api/TaskApi'
import { UpdateContext } from '../../../utils/UpdateContext'

const EditTask: FC<EditTaskProps> = ({
  isEditTaskOpen,
  setIsEditTaskOpen,
  taskId,
  taskTitle,
  taskDesc,
}) => {
  const { updated, setUpdated } = useContext(UpdateContext)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  const closeEditTaskModal = () => {
    setIsEditTaskOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (taskId) {
        await updateTask(
          {
            title: formData.title,
            description: formData.description,
          },
          taskId,
        )
        setIsEditTaskOpen(false)
        setUpdated(!updated)
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <>
      {isEditTaskOpen ? (
        <Container>
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
              <Buttons>
                <Button type='submit'>Edit Task</Button>
                <Button onClick={closeEditTaskModal}>Close</Button>
              </Buttons>
            </form>
          </Wrapper>
        </Container>
      ) : null}
    </>
  )
}

export default EditTask
