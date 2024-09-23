// src/components/Organisms/SessionsList/SessionsList.tsx
import { useEffect, useState } from 'react'
import { List, ListItem } from '../../Atoms/List/List'
import Typography from '../../Atoms/Typography/Typography'
import { SessionInterface, useSessionsFetch } from '../../../features/Sessions/useSessions'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'

export default function SessionsList() {
  const [isSelectedSession, setIsSelectedSession] = useState<string | null>(null)
  const {
    meetingState: { countryName },
    setSelectedSession,
  } = useSliceMergeStore()
  const { data } = useSessionsFetch(countryName)

  useEffect(() => {
    setIsSelectedSession(null)
  }, [countryName])

  const handleSessionClick = (session: SessionInterface) => {
    setSelectedSession(session)
    setIsSelectedSession(session.session_name) // 클릭된 항목의 키 설정
  }

  return (
    <List display="flex">
      {data.map((session: SessionInterface) => {
        return (
          <ListItem
            width="100%"
            height="30px"
            alignItems="center"
            key={session.session_name}
            onClick={() => handleSessionClick(session)}
            isSelected={session.session_name === isSelectedSession} // 선택 여부 전달
          >
            <Typography variant="body1">{session.session_name}</Typography>
          </ListItem>
        )
      })}
    </List>
  )
}
