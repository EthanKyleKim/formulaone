import styled from 'styled-components'

export const TimeLineContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
`

export const TimeLineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TimeLineTimes = styled.div`
    padding: 16px;
    border-radius: 8px;
    background: #3a3a3a;
    width: 160px;
    height: 50px;
`

export const TimeLineCircle = styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #3a3a3a;
`

export const VerticalLine = styled.div`
    width: 5px;
    height: 100%;
    background: #3a3a3a;
    z-index: 0;
`

export const TimeLineContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border-radius: 8px;
    background: #3a3a3a;
    width: 500px;
`
