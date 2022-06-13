import React from 'react'
import { Container, Tittle, Date, Rocket } from './styled'

const Card = ({title, date, rocket}) => {
  return (
    <Container>
      <Tittle>
        {title}
      </Tittle>
      <Date>
        {date}
      </Date>
      <Rocket>
        {rocket}
      </Rocket>
    </Container>
  )
}

export default Card