import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color:${({ status }) => {
        switch (status) {
            case "concluída":
                return "#00A88B";
            case "realizando":
                return "#7678D1";
            default:
                return "#EC221F";
        }
    }};
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s;
    animation: taskAnimation 1s ease 0s 1 normal forwards;

    h2 {
        font-size: 1rem;
    }
    
    p {
        font-size: 0.75rem;
    }

    span {
        font-size: 0.75rem;
        display: inline-block;
        width: fit-content;
        padding: 0.25rem;
        border: 1px solid #FFFFFF;
        border-radius: 0.25rem;
    }

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        scale: 0.8;
    }


    @keyframes taskAnimation {
        0% {
            transform: scale(0.5);
            transform-origin: 50% 0%;
        }

        100% {
            transform: scale(1);
            transform-origin: 50% 0%;
        }
    }
`;