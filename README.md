# Testes (Qualidade de Software)

Esse projeto visa o aprendizado dos alunos sobre os diversos tipos de testes que existem dentro da Qualidade de Software que podem ser utilizados para assegurar a qualidade.

## Tipos de Testes

- Unitário
- Integração
- Regressão

## Instalação e Execução

Crie uma pasta dentro do seu pc e abra ela na sua IDE. Após isso, você pode inicializar um projeto Node aplicando o seguinte comando:

```bash
  cd nome-da-sua-pasta
  npm init -y
```

Agora você precisa instalar as dependências que serão necessárias para utilização:

```bash
  npm install --save-dev jest ts-jest @types/jest
```

Em seguida, vocês inicializem um arquivo de configuração do Jest com o seguinte comando:

```bash
  npm init jest@latest
```

Dentro do arquivo `jest.config.ts`, você substitua todo código por esse abaixo:

```js
/** @type { import('ts-jest').JestConfigWithTsJest } */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ['<rootDir>/src/*.test.ts'],
}
```

Seguindo, vocês inicializem um arquivo de configuração do TypeScript:

```bash
  npx tsc --init
```

Continuando, agora vocês adicionem dentro do arquivo `package.json`, um script para rodar os testes:

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

Agora é somente executar a aplicação utilizando o seguinte comando:

```bash
npm test
```

## Cobertura de Testes

Para rodar o Jest em modo de cobertura de testes, precisamos adicionar os seguintes
parâmetros dentro do arquivo `jest.config.ts`. Veja como é simples:

```js
  collectCoverage: true, // Acionar a cobertura de testes
  coverageDirectory: 'coverage', // Diretório onde irá colocar os arquivos gerados
  collectCoverageFrom: [ // Onde irá coletar os testes
    'src/**/*.ts', // São todos os arquivos dentro da pasta src e as subpastas dentro dela
    '!src/**/*.d.ts', // Arquivos que irá ignorar ao verificar dentro da pasta
  ],
```

Você ainda pode configurar para limitar os testes em determinadas propriedades:

```js
coverageThreshold: {
  global: {
    branches: 80, // Cobertura mínima para branches
    functions: 80, // Cobertura mínima para funções
    lines: 80, // Cobertura mínima para linhas
    statements: 80, // Cobertura mínima para declarações
  },
},
```

Seguindo, adicione um script do Jest para rodar em modo de cobertura.

```js
  "test:coverage": "jest --coverage" 
```

Agora, execute o comando a seguir para rodar em modo de cobertura.

```bash
  npm run test:coverage
```

## Authors

- [@elemarleonel](https://github.com/ElemarLeonel/)
