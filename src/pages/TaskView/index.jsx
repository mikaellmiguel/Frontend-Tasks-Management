import { Button } from "../../components/Button";
import { Container, Header, Options, TaskContent} from "./styles";
import { Input } from "../../components/Input";

export function TaskView() {
    return (
        <Container>
            <Header>
                <h1>Nova tarefa</h1>
                <Options>
                    
                    <select id="priority"> 
                        <option value="alta" selected>Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                    </select>

                    <select id="status"> 
                        <option value="pendente" selected>Pendente</option>
                        <option value="realizando">Realizando</option>
                        <option value="concluída">Concluída</option>
                    </select>

                    <Button text="Deletar Tarefa" backgroundColor="#EC221F"></Button>
                    <Button text="Salvar Informações"></Button>
                </Options>
            </Header>
            <TaskContent>
                <Input placeholder="Título da Tarefa"/>
                <textarea placeholder="Insira a descrição da tarefa" rows={6}></textarea>
                
                <div>
                    <label htmlFor="due_date">Data de Vencimento: </label>
                    <Input id="due_date" type="date" placeholder="Data de Vencimento"/>
                </div>
                
            </TaskContent>
            
        </Container>
    );
}