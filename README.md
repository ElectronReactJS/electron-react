# Projeto Electron-React

Este projeto é um esqueleto básico para uma aplicação Electron com React. Foi configurado com Webpack para compilação e empacotamento, e inclui uma configuração básica de Content Security Policy (CSP) para ajudar a proteger contra execução de código malicioso.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```plaintext
- src/
  - main_window/       # Código do processo principal do Electron
  - renderer/          # Código do processo de renderização do Electron
- .gitignore          # Arquivo Git Ignore
- package.json        # Arquivo de metadados do projeto
- README.md           # Este arquivo
- webpack.config.js   # Configuração do Webpack
```

## Requisitos

- Node.js
- npm ou Yarn

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/electron-react.git
cd electron-react
```

2. Instale as dependências:
```bash
npm install
```
ou
```bash
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```
ou
```bash
yarn start
```

4. Para empacotar o projeto para produção, execute:
```bash
npm run build
```
ou
```bash
yarn build
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou criar um Pull Request.

## Licença

MIT

---

Este README fornece uma visão geral básica do projeto e instruções sobre como executar e empacotar o projeto para produção. Certifique-se de personalizar os URLs do repositório e outros detalhes específicos do projeto conforme necessário.