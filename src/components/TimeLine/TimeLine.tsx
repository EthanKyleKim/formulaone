import { ReactNode } from 'react'
import { TimeLineContainer } from './TimeLine.styled'

export interface TimeLineInterface {
    children: ReactNode
}

export default function TimeLine({ children }: TimeLineInterface) {
    return (
        <>
            <TimeLineContainer>{children}</TimeLineContainer>
        </>
    )
}
