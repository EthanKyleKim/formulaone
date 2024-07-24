// LeclercRadio.tsx
import Link from 'next/link'
import Button from '../../components/Button/Button'
import { Line, RadioContainer, Message, Title, AudioWave } from './RadioMessage.styled'

function RadioMessage() {
    const heights = [
        10, 22, 25, 17, 22, 30, 28, 24, 26, 28, 30, 23, 24, 16, 28, 30, 26, 24, 26, 18, 20, 18, 26, 14, 22, 10, 24, 32,
        24, 32, 30, 28, 26, 30, 12, 20, 18, 16, 14, 12, 10,
    ]

    const waveBars = heights.map((height, i) => <div key={i} style={{ height: `${height}px` }}></div>)
    return (
        <RadioContainer>
            <Title>
                <span>F1 INFO</span>
                <span>RADIO</span>
            </Title>
            <AudioWave>{waveBars}</AudioWave>
            <Line />
            <Message align="right" highlight>
                "다양한 경기정보를 보여주는"
            </Message>
            <Message align="left">
                "F1 INFO에 오신것을
                <br />
                환영합니다."
            </Message>
            <Link href={'/information'}>
                <Button text="F1 INFO로 이동" />
            </Link>
        </RadioContainer>
    )
}

export default RadioMessage
