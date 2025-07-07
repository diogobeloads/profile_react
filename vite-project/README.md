# Projeto React - Listagem de Repositórios do GitHub

Este projeto é uma aplicação React que exibe o perfil de um usuário do GitHub e uma lista dos seus repositórios públicos, com links diretos para cada repositório.

## Funcionalidades

- Busca e exibe informações do perfil de um usuário do GitHub.
- Lista os repositórios públicos do usuário.
- Cada repositório possui um link para acesso direto no GitHub.
- Layout responsivo e visual moderno.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Modules

## Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd seu-repositorio
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra [http://localhost:5173](http://localhost:5173) no navegador para visualizar.

## Estrutura de Pastas

```
src/
  components/
    Perfil/
    RepoList/
    Formulario/
  App.jsx
  index.css
```

## Personalização

- Para alterar o usuário do GitHub exibido, edite a propriedade `nomeUsuario` no componente `App.jsx`.

## Licença

Este projeto está sob a licença