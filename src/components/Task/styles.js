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
    width: 16rem;
    padding: 1rem;
    color: #FFFFFF;
    border-radius: 0.75rem;

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
`;