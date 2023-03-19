import React from 'react'
import { useEffect, useState, useCallback } from 'react'
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

const Card: React.FC<CardProps> = ({ task }) => {
  const [user, setUser] = useState<UsersI>()
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState<boolean>(false)

  const openEditTaskModal = () => {
    setIsEditTaskModalOpen((prev) => !prev)
  }

  const fetchUser = useCallback(async () => {
    setUser(await getUserById(task.userId))
  }, [])

  const handleComplete = async () => {
    await setTaskCompleted(task.id)
  }

  const handleDelete = async () => {
    await deleteTask(task.id).catch((err) => {
      console.log('Error: Cant delete task. \n' + err)
    })
  }

  useEffect(() => {
    fetchUser().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [])

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
