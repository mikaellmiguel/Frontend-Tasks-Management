import { Button } from "../../components/Button";
import { Container, BoardContainer, Header, Options} from "./styles";
import { Input } from "../../components/Input";
import { Board } from "../../components/Board";

export function Homepage() {

  const tasksPendente = [
   {id: 1, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Alta", status: "pendente"},
   {id: 2, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "pendente"},
   {id: 3, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "pendente"},
   {id: 4, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "pendente"},
   {id: 5, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "pendente"},
  ];

  const tasksRealizando = [
    {id: 1, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Alta", status: "realizando"},
    {id: 2, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "realizando"},
    {id: 3, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "realizando"},
    {id: 4, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "realizando"},
    {id: 5, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "realizando"},
  ];

  const tasksConcluido = [
    {id: 1, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Alta", status: "concluída"},
    {id: 2, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "concluída"},
    {id: 3, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "concluída"},
    {id: 4, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "concluída"},
    {id: 5, title: "Estudar React", description: "Estudar React para entender melhor o funcionamento", priority: "Média", status: "concluída"},
  ];


  return (
    <Container>
      <Header>
        <h1>Kanban</h1>
        <Options>
          <Input placeholder="Buscar..." />
          <Button text="Nova Tarefa" />
        </Options>
      </Header>
      <BoardContainer>
        <Board title="Pendente" tasks={tasksPendente}></Board>
        <Board title="Realizando" tasks={tasksRealizando}></Board>
        <Board title="Concluído" tasks={tasksConcluido}></Board>
      </BoardContainer>
    </Container>
  );
}