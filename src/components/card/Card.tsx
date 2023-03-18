import React from 'react'
import {
  Container,
  Votes,
  Arrow,
  VotesValue,
  Quote,
  QuoteAuthor,
  QuoteText,
  AuthorName,
  AuthorPicture,
} from "./Card.style";
import { useNavigate } from "react-router-dom";
import { CardProps } from '../../interfaces/TaskInterfaces';

// Recives user and quote data, displays it, and handles quote voting

const Card: React.FC<CardProps> = ({tasks}) => {

  return (
    <Container>
      <Votes>
        <Arrow>
        </Arrow>
        <VotesValue></VotesValue>
        <Arrow></Arrow>
      </Votes>
      <Quote>
        <QuoteText>
          <p>{tasks.description}</p>
        </QuoteText>
        <QuoteAuthor>
          <AuthorName>
            <p>
              {tasks.title}
            </p>
          </AuthorName>
        </QuoteAuthor>
      </Quote>
    </Container>
  );
};

export default Card;
