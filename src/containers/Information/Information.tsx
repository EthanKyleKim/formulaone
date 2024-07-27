'use client'

import Weather from '../../components/Part/Weather/Weather'
import CardWithHeader from '../../components/Molecule/CardWithHeader/CardWithHeader'
import SessionsList from '../../components/Part/SessionsList/SessionsList'
import DriversList from '../../components/Part/DriversList/DriversList'

export default function Information() {
  return (
    <CardWithHeader headerText="세션 정보" width="82%" height="800px">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <SessionsList />
          <DriversList />
        </div>
        <div>
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </CardWithHeader>
  )
}
