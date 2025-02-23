import { Button } from "../../components/Button";
import { Container, BoardContainer, Header, Options} from "./styles";
import { Input } from "../../components/Input";
import { Board } from "../../components/Board";
import {api} from "../../services/api";
import { use, useEffect, useState } from "react";

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


  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    const response = await api.get("/tarefas");
    setTasks(response.data);
  }

  useEffect(() => {
    getTasks();
  }, []);

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
        <Board title="Pendente" tasks={tasks.filter(task => task.status=="pendente")}></Board>
        <Board title="Realizando" tasks={tasks.filter(task => task.status=="realizando")}></Board>
        <Board title="Concluído" tasks={tasks.filter(task => task.status=="concluída")}></Board>
      </BoardContainer>
    </Container>
  );
}