import React from 'react'
import { Container, LogoText, Rights } from './Footer.style'

const Footer = () => {
  return (
    <Container>
      <LogoText>
        To<span>Do</span>
      </LogoText>
      <Rights>
        All Rights Reserved &nbsp;|&nbsp;&nbsp;
        <a href='https://github.com/tomicilija' target='_blank' rel='noreferrer'>
          Ilija Tomic
        </a>
      </Rights>
    </Container>
  )
}

export default Footer
