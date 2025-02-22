import { Button } from "../../components/Button";
import { Container } from "./styles";
import { Task } from "../../components/Task";
import { Input } from "../../components/Input";

export function Homepage() {
  return (
    <Container>
      <h1>Homepage</h1>
      <Button text="Editar Informações" backgroundColor="#333333" />
      <Task title="Tarefa 1" description="Descrição da tarefa 1" priority="Alta" status="pendente"/>
      <Input type="date"/>
    </Container>
  );
}