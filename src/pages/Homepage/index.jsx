import { Button } from "../../components/Button";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Board } from "../../components/Board";

export function Homepage() {

  const tasks = [
   {id: 1, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Alta", status: "Pendente"},
   {id: 2, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "Pendente"},
   {id: 3, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "Pendente"},
   {id: 4, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "Pendente"},
   {id: 5, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "Pendente"},
  ];

  return (
    <Container>
      <h1>Homepage</h1>
      <Button text="Editar Informações" backgroundColor="#333333" />
      <Input type="date"/>
      <Board title="Pendente" tasks={tasks}></Board>
    </Container>
  );
}