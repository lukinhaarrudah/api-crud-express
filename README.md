# 🚀 API RESTful - CRUD de Usuários com Express.js

Projeto desenvolvido com **Node.js** e **Express.js** para praticar o desenvolvimento de APIs RESTful, implementando operações completas de **CRUD (Create, Read, Update e Delete)** para gerenciamento de usuários.

A aplicação utiliza dados armazenados em memória e demonstra conceitos fundamentais de desenvolvimento Backend, manipulação de requisições HTTP e organização de rotas.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript (ES6+)
- Nodemon

---

## ✨ Funcionalidades

- Listagem de usuários
- Busca de usuário por ID
- Cadastro de novos usuários
- Atualização de usuários
- Remoção de usuários
- Respostas em formato JSON
- Utilização de Status Codes HTTP

---

## 📚 Conceitos Praticados

- Desenvolvimento de APIs REST com Express.js
- Operações CRUD
- Manipulação de requisições e respostas HTTP
- Utilização dos métodos **GET**, **POST**, **PUT** e **DELETE**
- Uso de parâmetros de rota (`req.params`)
- Manipulação de dados utilizando Arrays e Objetos do JavaScript
- Validação de recursos antes de atualização e remoção
- Retorno de Status Codes apropriados para cada operação

---

## 🌐 Rotas da API

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| **GET** | `/usuarios` | Lista todos os usuários |
| **GET** | `/usuarios/:id` | Retorna um usuário pelo ID |
| **POST** | `/usuarios` | Cria um novo usuário |
| **PUT** | `/usuarios/:id` | Atualiza um usuário existente |
| **DELETE** | `/usuarios/:id` | Remove um usuário |

---

## 📄 Exemplo de Resposta

```json
{
  "id": 1,
  "nome": "Lucas",
  "idade": 22
}
```

---

## 📂 Estrutura do Projeto

```text
api-crud-express
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/lukinhaarrudah/api-crud-express.git
```

### 2. Entre na pasta do projeto

```bash
cd api-crud-express
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar os fundamentos do desenvolvimento Backend utilizando Node.js e Express.js, reforçando conceitos como criação de APIs REST, manipulação de rotas, tratamento de requisições HTTP e implementação de operações CRUD.

---

## 👨‍💻 Autor

**Lucas Arruda Leme**

  Software Developer | Python | Node.js | Express.js | JavaScript | Cybersecurity

- GitHub: https://github.com/lukinhaarrudah
- LinkedIn: https://linkedin.com/in/lucas-arruda-leme
