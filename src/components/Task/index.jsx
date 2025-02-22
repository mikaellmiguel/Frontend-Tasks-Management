/* eslint-disable react/prop-types */
import { Container } from "./styles";

export const Task= ({title, description, priority, ...rest}) => {
    return (
        <Container {...rest}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            {priority && <span>{priority}</span>}
        </Container>
    );
}