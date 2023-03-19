import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Container, Wrapper, TaskList, Tittle } from './Tasks.style'
import { TasksI, UsersI } from '../../interfaces/TaskInterfaces'
import { getUserById, getUserTasks } from '../../api/TaskApi'
import CardGrid from '../../components/card-grid/CardGrid'
import { UpdateContext } from '../../utils/UpdateContext'

const Tasks = () => {
  const userId = localStorage.getItem('userId')
  const { updated, setUpdated } = useContext(UpdateContext)
  const [tasks, setTasks] = useState<TasksI[]>([])
  const [user, setUser] = useState<UsersI>()

  const fetchUser = useCallback(async () => {
    if (userId) {
      const selectedUser = await getUserById(JSON.parse(userId)).catch((e) => {
        if (e.response.data.statusCode === 404) {
          localStorage.clear()
        }
      })
      setUser(selectedUser!)
    }
  }, [userId])

  const fetchTasks = useCallback(async () => {
    if (userId) {
      setTasks(await getUserTasks(JSON.parse(userId)))
      setUpdated(!updated)
    }
  }, [userId])

  useEffect(() => {
    fetchUser().catch((e) => {
      console.log('Error: Cant get data. \n' + e.response.data.message)
      if (e.response.data.statusCode === 404) {
        localStorage.clear()
      }
    })
    fetchTasks().catch((e: string) => {
      console.log('Error: Cant get data. \n' + e)
    })
  }, [updated])

  return (
    <Container>
      <Wrapper>
        {userId ? (
          <TaskList>
            <Tittle>
              <h4>
                {user?.name}&#39;s <span>Tasks</span>
              </h4>
            </Tittle>
            {tasks.length > 0 ? (
              <>
                <p>Add, edit, complete and delete tasks!</p>
                <CardGrid tasks={tasks} />
              </>
            ) : (
              <>
                <h5>The selected user doesn&#39;t have any tasks.</h5>
                <h6>
                  You can add tasks in the <span>Add Task</span> menu at the top.
                </h6>
              </>
            )}
          </TaskList>
        ) : (
          <>
            <Tittle>
              <h4>
                Never forget any <span>Task!</span> Track your tasks with the To<span>Do</span> app!
              </h4>
            </Tittle>
            <h5>The user is not selected.</h5>
            <h6>
              You can add or select users in the <span>User</span> menu at the top.
            </h6>
          </>
        )}
      </Wrapper>
    </Container>
  )
}

export default Tasks
