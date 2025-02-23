import styled from "styled-components";

export const Container = styled.div`
    background-color: #262626;
    height: 80vh;
    width: 30rem;
    color: #FFFFFF;
    border-radius: 0.75rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h1 {
        font-size: 1.5rem;
    }
`

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar {
        width: 12px;               
    }

    &::-webkit-scrollbar-track {
        background: transparent;        
    }

    &::-webkit-scrollbar-thumb {
        background-color: #191919;    
        border-radius: 20px;
    }

`
