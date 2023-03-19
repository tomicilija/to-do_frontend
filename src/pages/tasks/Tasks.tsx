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

const Tasks = () => {
  const [tasks, setTasks] = useState<TasksI[]>([])
  const [user, setUser] = useState<UsersI>()

  const fetchTasks = useCallback(async () => {
    setTasks(await getUserTasks(JSON.parse(localStorage.getItem('userId')!)))
  }, [])
  const fetchUser = useCallback(async () => {
    setUser(await getUserById(JSON.parse(localStorage.getItem('userId')!)))
  }, [])
  
  useEffect(() => {
    fetchUser().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
    fetchTasks().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
    //console.log('test')
  }, [fetchTasks, tasks, user])


  return (
    <Container>
        <Wrapper>
          <BestGuesses>
            <Tittle>
              <h5>{user?.name}&#39;s <span>Tasks</span></h5>
            </Tittle>
            <p>Add, edit, complete and delete tasks!</p>
            <CardGrid tasks={tasks}/>
          </BestGuesses>
        </Wrapper>
    </Container>
  )
}

export default Tasks
