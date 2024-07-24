'use client'

import Information from '../Information/Information'
import Meeting from '../Meeting/Meeting'
import { Container } from './Main.styled'

export default function Main() {
  return (
    <Container>
      <Meeting />
      <Information />
    </Container>
  )
}
