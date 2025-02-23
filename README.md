# Tasks Management

Este projeto é uma aplicação de gerenciamento de tarefas construída com React e Vite. Ele permite criar, visualizar, editar e deletar tarefas em um formato de Kanban.

**OBS: Este repositório contém unicamente o Frontend, para excutá-lo, é necessário inicializar o backend primeiramente.**

## Link do Backend 
### https://github.com/mikaellmiguel/Basic-API-Tasks-Management

## Visão Geral

A aplicação é composta por várias páginas e componentes que permitem a interação com as tarefas. As principais funcionalidades incluem:

- **Homepage**: Exibe as tarefas em um formato de Kanban, divididas em colunas de "Pendente", "Realizando" e "Concluído".
- **NewTask**: Permite a criação de novas tarefas.
- **TaskView**: Permite a visualização e edição de uma tarefa existente.
- **NotFound**: Página exibida quando uma rota não é encontrada.

## Estrutura do Projeto

- **src/components**: Contém componentes reutilizáveis como Button, Input, Task e Board.
- **src/pages**: Contém as páginas principais da aplicação como Homepage, NewTask, TaskView e NotFound.
- **src/routes**: Contém as definições de rotas da aplicação.
- **src/services**: Contém a configuração da API.
- **src/styles**: Contém os estilos globais da aplicação.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (Node Package Management)


## Tecnologias Utilizadas

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
- ![Styled-components](https://img.shields.io/badge/Styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
- ![React Router DOM](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/Framer--Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)



## Instalação

1. Clone o repositório:
   
   ```sh
   git clone https://github.com/mikaellmiguel/Frontend-Tasks-Management
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd Frontend-Tasks-Management
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie a aplicação:

   ```sh
   npm run dev
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:5173
   ```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

   ```sh
   git checkout -b minha-feature
   ```

3. Commit suas mudanças:

   ```sh
   git commit -m 'Adiciona minha feature'
   ```

4. Envie para o repositório remoto:

   ```sh
   git push origin minha-feature
   ```

5. Abra um Pull Request.