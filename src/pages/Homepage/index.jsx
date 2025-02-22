import { Button } from "../../components/Button";
import { Container } from "./styles";
import { Task } from "../../components/Task";

export function Homepage() {
  return (
    <Container>
      <h1>Homepage</h1>
      <Button text="Editar Informações" backgroundColor="#333333" />
      <Task title="Tarefa 1" description="Descrição da tarefa 1" priority="Alta" status="pendente"/>
    </Container>
  );
}