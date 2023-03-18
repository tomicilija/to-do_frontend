import React from 'react'
import { CardWrapper, NotFound } from "./CardGrid.style";
import Masonry from "react-masonry-css";
import { GridProps } from "../../interfaces/TaskInterfaces";
import Card from '../card/Card';

const CardGrid: React.FC<GridProps> = ({ tasks }: GridProps) => {
  let breakpointColumnsObj;
      if (tasks.length < 4) {
        breakpointColumnsObj = {
          default: tasks.length,
          1440: tasks.length,
          1110: 2,
          1000: 1,
        };
      } else {
        breakpointColumnsObj = {
          default: 4,
          1440: 3,
          1110: 2,
          900: 1,
        };
      }

  if (tasks) {
    return (
      <CardWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
            >
              {tasks.map((value, index) => (
                <Card key={index} tasks={value} />
              ))}
            </Masonry>
      </CardWrapper>
    );
  } else {
    return (
      <NotFound>
        <h1>OOPS!</h1> <p>This is looking a little empty</p>
      </NotFound>
    );
  }
};

export default CardGrid;
