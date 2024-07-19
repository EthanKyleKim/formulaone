import styled from 'styled-components'

type WrapperProps = {
    width: string
    height: string
    padding?: string
}

export const Wrapper = styled.div<WrapperProps>`
    width: ${({ width }) => `${width}`};
    height: ${({ height }) => `${height}`};
    border-radius: 8px;
    background-color: #1a1a1a;
    overflow: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: ${({ padding }) => `${padding}`};

    &::-webkit-scrollbar {
        width: 8px;
        height: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #1a1a1a;
        border-radius: 8px;
    }
`

export const StickyHeader = styled.h1`
    position: sticky;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: #ff4b4b;
    color: #fff;
    font-size: 24px;
    margin: 0;
    z-index: 2;
`
