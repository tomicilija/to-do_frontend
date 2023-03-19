import React from 'react'
import { CardWrapper, NotFound } from './CardGrid.style'
import Masonry from 'react-masonry-css'
import { GridProps } from '../../interfaces/TaskInterfaces'
import Card from '../card/Card'

const CardGrid: React.FC<GridProps> = ({ tasks }: GridProps) => {
  let breakpointColumnsObj
  if (tasks.length < 4) {
    breakpointColumnsObj = {
      default: tasks.length,
      1480: tasks.length,
      1140: 2,
      900: 1,
    }
  } else {
    breakpointColumnsObj = {
      default: 4,
      1480: 3,
      1140: 2,
      900: 1,
    }
  }

  if (tasks) {
    return (
      <CardWrapper>
        <Masonry breakpointCols={breakpointColumnsObj} className='my-masonry-grid'>
          {tasks.map((value, index) => (
            <Card key={index} task={value} />
          ))}
        </Masonry>
      </CardWrapper>
    )
  } else {
    return (
      <NotFound>
        <h3>OOPS!</h3> <p>This is looking a little empty</p>
      </NotFound>
    )
  }
}

export default CardGrid
