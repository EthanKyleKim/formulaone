import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
    TimeLineCircle,
    TimeLineContainer,
    TimeLineContents,
    TimeLineTimes,
    TimeLineWrapper,
    VerticalLine,
} from '../../components/Part/TimeLine/TimeLine.styled'

export default function RaceControl() {
    const { raceControl } = useSelector((state: RootState) => state.raceControl)

    return (
        <TimeLineContainer>
            {raceControl.map((race) => {
                return (
                    <TimeLineWrapper>
                        <TimeLineTimes>
                            <div>{race.date}</div>
                        </TimeLineTimes>

                        <TimeLineCircle />
                        <VerticalLine />

                        <TimeLineContents>
                            {race.category ? <div>category : {race.category}</div> : null}
                            {race.flag ? <div>flag : {race.flag}</div> : null}
                            {race.message ? <div>message : {race.message}</div> : null}
                            {race.scope ? <div>scope : {race.scope}</div> : null}
                        </TimeLineContents>
                    </TimeLineWrapper>
                )
            })}
        </TimeLineContainer>
    )
}
