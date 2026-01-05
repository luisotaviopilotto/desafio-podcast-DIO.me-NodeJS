# 🎙️ Projeto App Flow - API de Podcasts

API RESTful desenvolvida em Node.js e TypeScript para gerenciamento e consulta de episódios de podcasts. Este projeto foi desenvolvido como parte do desafio de Node.js da DIO.me.

## 📋 Descrição

Esta aplicação fornece endpoints para listar e filtrar episódios de podcasts de diferentes canais. Desenvolvida com Node.js puro (sem frameworks), a API utiliza TypeScript para tipagem estática e segue uma arquitetura em camadas para melhor organização do código.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **tsx** - Executor TypeScript para desenvolvimento
- **tsup** - Bundler TypeScript para produção

## 📁 Estrutura do Projeto

```
projeto-app-flow/
├── src/
│   ├── controllers/        # Controladores das requisições HTTP
│   │   └── podcastController.ts
│   ├── models/            # Interfaces e modelos de dados
│   │   ├── podcastModel.ts
│   │   └── transferModel.ts
│   ├── repositories/      # Camada de acesso a dados
│   │   ├── podcastRepository.ts
│   │   └── podcasts.json
│   ├── routes/            # Definição de rotas
│   │   └── routes.ts
│   ├── services/          # Lógica de negócio
│   │   ├── listEpisodesServices.ts
│   │   └── filterEpisodesServices.ts
│   ├── utils/             # Utilitários e enums
│   │   ├── contentType.ts
│   │   ├── httpMethods.ts
│   │   └── statusCode.ts
│   ├── app.ts             # Configuração da aplicação
│   └── server.ts          # Inicialização do servidor
├── package.json
├── tsconfig.json
└── .gitignore
```

## 🎯 Funcionalidades

### Endpoints Disponíveis

#### 1. Listar Todos os Episódios

```
GET /api/list
```

Retorna todos os episódios de podcasts cadastrados.

**Resposta de Sucesso (200):**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esportes", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esportes", "corrida"]
  }
]
```

#### 2. Filtrar Episódios por Nome do Podcast

```
GET /api/filter?p=flow
```

Retorna apenas os episódios do podcast especificado.

**Parâmetro:**

- `p` - Nome do podcast (ex: "flow", "venus")

**Resposta de Sucesso (200):**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esportes", "bodybuilder"]
  }
]
```

**Resposta Sem Conteúdo (204):**
Retornado quando não há episódios correspondentes ao filtro.

## 🔧 Instalação e Uso

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd projeto-app-flow
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
   Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

### Executando a Aplicação

#### Modo Desenvolvimento

```bash
npm run start:dev
```

#### Modo Desenvolvimento com Watch

```bash
npm run start:watch
```

#### Build de Produção

```bash
npm run dist
```

#### Executar Versão de Produção

```bash
npm run start:dist
```

A aplicação estará disponível em `http://localhost:3333`

## 📊 Arquitetura

O projeto segue uma arquitetura em camadas:

1. **Controllers**: Recebem as requisições HTTP e delegam para os services
2. **Services**: Contêm a lógica de negócio da aplicação
3. **Repositories**: Responsáveis pelo acesso e manipulação dos dados
4. **Models**: Definem as interfaces e estruturas de dados
5. **Utils**: Funções utilitárias e enumerações

### Padrões e Boas Práticas

- ✅ Tipagem estática com TypeScript
- ✅ Separação de responsabilidades
- ✅ Código modular e reutilizável
- ✅ Enums para constantes (HTTP Methods, Status Codes, Content Types)
- ✅ Async/Await para operações assíncronas

## 🎨 Modelos de Dados

### PodcastModel

```typescript
interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}
```

### PodcastTransferModel

```typescript
interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
```

## 📝 Status Codes HTTP

A aplicação utiliza os seguintes status codes principais:

- `200` - OK - Requisição bem-sucedida
- `204` - No Content - Nenhum conteúdo encontrado
- `400` - Bad Request - Requisição inválida
- `404` - Not Found - Recurso não encontrado
- `500` - Internal Server Error - Erro no servidor

## 🧪 Testando a API

Você pode testar os endpoints usando ferramentas como:

### cURL

```bash
# Listar todos os episódios
curl http://localhost:3333/api/list

# Filtrar por podcast
curl http://localhost:3333/api/filter?p=flow
```

### Postman / Insomnia

Importe a collection ou crie manualmente as requisições GET para os endpoints listados.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Luis Otavio Pilotto**

Desenvolvido como parte do desafio de Node.js da [DIO.me](https://dio.me)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
