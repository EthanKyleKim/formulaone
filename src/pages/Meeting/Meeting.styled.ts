import styled from 'styled-components'

type StyledLiProps = {
    width?: string
    height?: string
    isSelected?: boolean
}

export const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const StyledLi = styled.li<StyledLiProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 16px;
    border: 1px solid #444;
    border-radius: 8px;
    background-color: #2a2a2a;
    color: #ddd;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ isSelected }) => (isSelected ? '#ff4b4b' : '#2a2a2a')}; // 선택된 경우의 배경색

    &:hover {
        background-color: #ff4b4b;
        color: #fff;
    }
`
