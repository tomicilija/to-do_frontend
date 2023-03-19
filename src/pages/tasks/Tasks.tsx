import { useState, useEffect, useContext, useCallback } from 'react'
import React from 'react'
import {
  Container,
  ProfileBanner,
  ProfilePicture,
  ProfileInfo,
  ProfileName,
  NotFound,
  Wrapper,
  BestGuesses,
  Tittle,
  LoadMore,
} from './Tasks.style'
import { Link } from 'react-router-dom'
import { TasksI, UsersI } from '../../interfaces/TaskInterfaces'
import { getUserById, getUserTasks } from '../../api/TaskApi'
import CardGrid from '../../components/card-grid/CardGrid'
import { UpdateContext } from '../../utils/UpdateContext'

const Tasks = () => {
  const userId = localStorage.getItem('userId')
  const { updated, setUpdated } = useContext(UpdateContext)
  const [tasks, setTasks] = useState<TasksI[]>([])
  const [user, setUser] = useState<UsersI>()

  const fetchTasks = useCallback(async () => {
    if (userId) {
      setTasks(await getUserTasks(JSON.parse(userId)))
      setUpdated(!updated)
    }
  }, [userId])
  const fetchUser = useCallback(async () => {
    if (userId) {
      setUser(await getUserById(JSON.parse(userId)))
    }
  }, [userId])

  useEffect(() => {
    fetchUser().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
    fetchTasks().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [updated])

  return (
    <Container>
      <Wrapper>
        <BestGuesses>
          <Tittle>
            <h5>
              {user?.name}&#39;s <span>Tasks</span>
            </h5>
          </Tittle>
          <p>Add, edit, complete and delete tasks!</p>
          <CardGrid tasks={tasks} />
        </BestGuesses>
      </Wrapper>
    </Container>
  )
}

export default Tasks
