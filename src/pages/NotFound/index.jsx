import { Container } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";


export function NotFound() {

    const navigate = useNavigate();
    
    function navigateToHome() {
        navigate("/");
    }

    return (
        <Container>
        <h1>404</h1>
        <p>Page not found</p>
        <img src="https://cdn-icons-png.flaticon.com/512/6178/6178994.png" width={256} alt="Imagem ilustrativa de resultados não encontrados"/>
        <Button onClick={navigateToHome} text="Voltar para Tela Inicial"/>
        </Container>
    );
}