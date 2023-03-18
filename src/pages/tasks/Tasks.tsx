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
import { TasksI } from '../../interfaces/TaskInterfaces'
import { getUserTasks } from '../../api/TaskApi'
import CardGrid from '../../components/card-grid/CardGrid'

const Tasks = () => {
  const [tasks, setTasks] = useState<TasksI[]>([])

  const fetchTasks = useCallback(async () => {
    setTasks(await getUserTasks(JSON.parse(localStorage.getItem('userId')!)))
  }, [])
  
  useEffect(() => {
    fetchTasks().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [fetchTasks, tasks])

  return (
    <Container>
        <Wrapper>
          <BestGuesses>
            <Tittle>
              <h5>Tasks</h5>
            </Tittle>
            <p>Add, edit, complete and elete tasks!</p>
            <br />
            <CardGrid tasks={tasks}/>
          </BestGuesses>
        </Wrapper>
    </Container>
  )
}

export default Tasks
