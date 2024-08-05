'use client'

import Weather from '../../components/Part/Weather/Weather'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import SessionsList from '../../components/Part/SessionsList/SessionsList'
import DriversList from '../../components/Part/DriversList/DriversList'

export default function Information() {
  return (
    <CardWithHeader headerText="세션 정보" width="77vw" height="100vh">
      <SessionsList />
      <DriversList />
      {/* <Weather /> */}
    </CardWithHeader>
  )
}
