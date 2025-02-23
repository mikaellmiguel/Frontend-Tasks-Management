import styled from "styled-components";

export const Container = styled.div`
    background-color: #191919;
    min-height: 100vh;
    padding: 0 3rem;
`

export const BoardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`

export const Header = styled.header`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    
    h1 {
        font-size: 2.5rem;
        color: #FFFFFF;
    }
`

export const Options = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center
`