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

const Card: React.FC<CardProps> = ({ task }) => {
  const [user, setUser] = useState<UsersI>()
  const [complete, setComplete] = useState<boolean>(task.status)

  const fetchUser = useCallback(async () => {
    setUser(await getUserById(task.userId))
  }, [])

  const handleComplete = async () => {
    const completedTask = await setTaskCompleted(task.id)
    setComplete(completedTask.status)
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
    <Container className={complete ? 'complete' : 'todo'}>
      <Task>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskAuthor>
          <AuthorName>{user?.name}</AuthorName>
        </TaskAuthor>
        <Input
          onChange={handleComplete}
          type='checkbox'
          defaultChecked={complete}
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
      </Task>
    </Container>
  )
}

export default Card
