import { Button } from "../../components/Button";
import { Container, Header, Options, TaskContent } from "./styles";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function NewTask() {
    const navigate = useNavigate();

    const [priority, setPriority] = useState("alta");
    const [status, setStatus] = useState("pendente");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    async function createTask() {
        if (!title || !description || !date) {
            alert("Preencha todos os campos antes de salvar!");
            return;
        }

        try {
            await api.post("/tarefas", {
                titulo: title,
                descricao: description,
                prioridade: priority,
                status,
                data_vencimento: date
            });

            alert("Tarefa criada com sucesso!");
            navigate("/");
        } 
        catch (error) {
            alert(`Erro ao criar tarefa: ${error.response?.data?.message || error.message}`);
        }
    }

    return (
        <Container>
            <Header>
                <h1>Nova Tarefa</h1>
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

                    <Button text="Criar Tarefa" onClick={() => createTask()}></Button>
                </Options>
            </Header>

            <TaskContent>
                <Input placeholder="Título da Tarefa" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Insira a descrição da tarefa" rows={6} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <div>
                    <label htmlFor="due_date">Data de Vencimento: </label>
                    <Input id="due_date" type="date" placeholder="Data de Vencimento" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </TaskContent>
        </Container>
    );
}
