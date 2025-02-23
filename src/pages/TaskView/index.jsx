import { Button } from "../../components/Button";
import { Container, Header, Options, TaskContent} from "./styles";
import { Input } from "../../components/Input";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function TaskView() {
    

    const id = useParams().id;

    const [task, setTask] = useState({});

    const [priority, setPriority] = useState("alta");
    const [status, setStatus] = useState("pendente");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    
    useEffect(() => {
        async function fetchTask() {
            const response = await api.get(`/tarefas/${id}`);
            const task = response.data;
            
            setTask(task);
            setPriority(task.priority);
            setStatus(task.status);
            setTitle(task.title);
            setDescription(task.description);
            setDate(task.due_date);
        }

        fetchTask();
    }, [id]);

    async function deleteTask() {
        await api.delete(`/tarefas/${id}`);
    }

    return (
        <Container>
            <Header>
                <h1>{title}</h1>
                <Options>
                    
                    <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="alta">Alta</option>
                        <option value="média">Média</option>
                        <option value="baixa">Baixa</option>
                    </select>

                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="pendente">Pendente</option>
                        <option value="realizando">Realizando</option>
                        <option value="concluída">Concluída</option>
                    </select>

                    <Button text="Deletar Tarefa" backgroundColor="#EC221F"></Button>
                    <Button text="Salvar Informações"></Button>
                </Options>
            </Header>
            <TaskContent>
                <Input placeholder="Título da Tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Insira a descrição da tarefa" rows={6} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                
                <div>
                    <label htmlFor="due_date">Data de Vencimento: </label>
                    <Input id="due_date" type="date" placeholder="Data de Vencimento" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                
            </TaskContent>
            
        </Container>
    );
}