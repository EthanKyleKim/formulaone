'use client'

import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import SessionsList from '../../components/Part/SessionsList/SessionsList'
import DriversList from '../../components/Part/DriversList/DriversList'

export default function Information() {
  return (
    <CardWithHeader headerText="세션 정보" width="75vw" height="93vh">
      <SessionsList />
      <DriversList />
      {/* <Weather /> */}
    </CardWithHeader>
  )
}
