/* eslint-disable react/prop-types */
import { Container, TaskContainer } from "./styles";
import { Task } from "../Task";
import { useNavigate } from "react-router-dom";

export const Board = ({title, tasks, ...rest}) => {
    const navigate = useNavigate();

    function handleClickTask(id) {
        navigate(`/edit/${id}`);
    }
    
    return (
        <Container {...rest}>
            <h1>{title}</h1>
            
            <TaskContainer>
                {tasks && tasks.map(task => {
                    return <Task key={task.id}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    status={task.status}
                    onClick={() => handleClickTask(task.id)}/>})}
            </TaskContainer>

        </Container>
    );
}