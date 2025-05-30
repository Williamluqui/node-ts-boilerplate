## Boilerplate

npm install -D typescript eslint prettier \
@typescript-eslint/parser @typescript-eslint/eslint-plugin \
eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier

# 🧱 Node.js Boilerplate com TypeScript, ESLint (Airbnb), Prettier

Projeto base para criação de APIs Node.js utilizando TypeScript com foco em organização, produtividade e boas práticas de código.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [ESLint](https://eslint.org/) (Airbnb Base)
- [Prettier](https://prettier.io/)
- [Nodemon](https://nodemon.io/)
- [Concurrently](https://www.npmjs.com/package/concurrently)

## 📦 Scripts disponíveis

| Comando             | Descrição                                                        |
| ------------------- | ---------------------------------------------------------------- |
| `npm run build`     | Compila o projeto TypeScript para JavaScript (`dist/`)           |
| `npm run build:dev` | Compila em modo de observação (watch mode)                       |
| `npm run dev`       | Executa o projeto em modo de desenvolvimento (`build + nodemon`) |
| `npm run start`     | Executa a aplicação a partir do código transpilado               |
| `npm run lint`      | Executa o ESLint nos arquivos `.ts`                              |
| `npm run format`    | Formata os arquivos com o Prettier                               |

## 📁 Estrutura de pastas

```
📂boirlerplate/
├── 📂src/
│ ├── server.ts # Ponto de entrada principal
│ └── routes/ # Suas rotas Express
├── 📂dist/ # Código compilado (gerado pelo TypeScript)
├── .eslintrc.json # Configurações do ESLint
├── .prettierrc # Configurações do Prettier
├── tsconfig.json # Configurações do TypeScript
├── package.json
└── README.md
```

## 🧪 Requisitos

Node.js v18+

npm v9+

## Usar o boilerplate com degit

### Se não tiver instalado globalmente

`npm install -g degit`

### Criar um novo projeto baseado no seu boilerplate

`npx degit seu-usuario/node-ts-boilerplate nome-do-novo-projeto`

`cd nome-do-novo-projeto`

`npm install`

`npm run dev`
