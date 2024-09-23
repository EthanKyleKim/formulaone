import styled, { keyframes } from 'styled-components'

const RadioContainer = styled.div`
    position: absolute;
    top: 38%;
    left: 85%;
    transform: translateX(-50%);
    background-color: #0c0d0e;
    color: white;
    padding: 0px 20px 20px 20px;
    border-radius: 8px;
    width: 320px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Title = styled.h1`
    color: #ff0000;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: right;
    text-align: right;
    flex-wrap: wrap;

    span {
        display: block;
        width: 100%;

        &:nth-child(2) {
            color: white;
        }
    }
`

const waveAnimation = keyframes`
  0%, 100% { transform: scaleY(0.1); }
  50% { transform: scaleY(1); }
`

const AudioWave = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 30px;
    margin: 0 0 6px 0;

    div {
        width: 4px;
        background: red;
        margin: 0 2px;
        animation: ${waveAnimation} 2s infinite ease-in-out;
        transform-origin: bottom;
    }
`

const Line = styled.div`
    height: 4px;
    background: red;
`

const Message = styled.p<{ highlight?: boolean; align: 'right' | 'left' }>`
    color: ${(props) => (props.highlight ? '#ff0000' : 'white')};
    text-align: ${(props) => props.align};
    font-size: 24px;
    margin: 10px 0;
`

export { RadioContainer, Title, AudioWave, Line, Message }
