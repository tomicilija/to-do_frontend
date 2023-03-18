import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Container, TaskTitle, Task, TaskAuthor, TaskDescription, AuthorName } from './Card.style'
import { CardProps, UsersI } from '../../interfaces/TaskInterfaces'
import { getUserById, setTaskCompleted } from '../../api/TaskApi'
import { Input } from 'reactstrap'

// Recives user and quote data, displays it, and handles quote voting

const Card: React.FC<CardProps> = ({ task }) => {
  const [user, setUser] = useState<UsersI>()
  const [complete, setComplete] = useState<boolean>(false)

  const fetchUser = useCallback(async () => {
    setUser(await getUserById(task.userId))
  }, [])

  const handleComplete = async () => {
    const completedTask = await setTaskCompleted(task.id)
    setComplete(completedTask.status)
  }

  useEffect(() => {
    setComplete(task.status)
    fetchUser().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [])

  return (
    <Container>
      <Task>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskAuthor>
          <AuthorName>{user?.name}</AuthorName>
        </TaskAuthor>
        <Input onClick={handleComplete} type='checkbox' className='task-complete' />
        <p>{complete.toString()}</p>
      </Task>
    </Container>
  )
}

export default Card
