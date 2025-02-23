import { Button } from "../../components/Button";
import { Container, BoardContainer, Header, Options} from "./styles";
import { Input } from "../../components/Input";
import { Board } from "../../components/Board";
import {api} from "../../services/api";
import { useEffect, useState } from "react";

export function Homepage() {

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