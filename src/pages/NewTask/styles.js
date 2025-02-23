import styled from "styled-components"

export const Container = styled.div`
    background-color: #191919;
    min-height: 100vh;
    padding: 0 3rem;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    h1 {
        color: #fff;
    }
`

export const Options = styled.div`
    display: flex;
    gap: 1rem;
`

export const TaskContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;

    & > input {
        width: 50%;
    }

    label {
        color: #fff;
        margin-right: 1rem;
    }
`