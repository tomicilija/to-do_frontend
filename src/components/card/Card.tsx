import React from 'react'
import { useEffect, useState, useCallback, useContext } from 'react'
import {
  Container,
  TaskTitle,
  Task,
  TaskAuthor,
  TaskDescription,
  AuthorName,
  Button,
  Icon,
} from './Card.style'
import { CardProps, UsersI } from '../../interfaces/TaskInterfaces'
import { deleteTask, getUserById, setTaskCompleted } from '../../api/TaskApi'
import { Input } from 'reactstrap'
import EditTask from '../modals/edit-task/EditTask'
import { UpdateContext } from '../../utils/UpdateContext'

const Card: React.FC<CardProps> = ({ task }) => {
  const { updated, setUpdated } = useContext(UpdateContext)
  const [user, setUser] = useState<UsersI>()
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState<boolean>(false)

  const openEditTaskModal = () => {
    setIsEditTaskModalOpen((prev) => !prev)
    setUpdated(!updated)
  }

  const fetchUser = useCallback(async () => {
    if (task) {
      setUser(await getUserById(task.userId))
      setUpdated(!updated)
    }
  }, [task])

  const handleComplete = async () => {
    if (task) {
      await setTaskCompleted(task.id)
      setUpdated(!updated)
    }
  }

  const handleDelete = async () => {
    if (task) {
      await deleteTask(task.id).catch((err) => {
        console.log('Error: Cant delete task. \n' + err)
      })
      setUpdated(!updated)
    }
  }

  useEffect(() => {
    fetchUser().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [updated])

  return (
    <>
      <Container className={task.status ? 'complete' : 'todo'}>
        <Task onClick={openEditTaskModal}>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
          <TaskAuthor>
            <AuthorName>{user?.name}</AuthorName>
          </TaskAuthor>
        </Task>

        {task.completedAt && task.status ? (
          <p>
            {Intl.DateTimeFormat('en-GB', {
              timeStyle: 'short',
              dateStyle: 'medium',
            }).format(new Date(task.completedAt))}
          </p>
        ) : (
          <></>
        )}
        <Input
          onChange={handleComplete}
          type='checkbox'
          checked={task.status}
          className='task-complete'
        />
        <Button onClick={handleDelete}>
          <Icon
            style={{
              backgroundImage:
                'url(' + 'https://www.svgrepo.com/show/21045/delete-button.svg' + ')',
            }}
          />
        </Button>
      </Container>
      <EditTask
        isEditTaskOpen={isEditTaskModalOpen}
        setIsEditTaskOpen={setIsEditTaskModalOpen}
        taskId={task.id}
        taskTitle={task.title}
        taskDesc={task.description}
      />{' '}
    </>
  )
}

export default Card
