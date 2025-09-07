# Simulação de Propagação de Notícias Falsas

**Conteúdo da Disciplina**: Grafos 1

## Alunos

<table>
  <tr>
    <td align="center"><a href="https://github.com/luanasoares0901"><img style="border-radius: 60%;" src="https://github.com/luanasoares0901.png" width="200px;" alt=""/><br /><sub><b>Luana Ribeiro</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/MMcLovin"><img style="border-radius: 60%;" src="https://github.com/MMcLovin.png" width="200px;" alt=""/><br /><sub><b>Gabriel Fernando de Jesus Silva</b></sub></a><br /></td>
  </tr>
</table>

## Sobre

Este trabalho tem como objetivo simular a propagação de notícias, utilizando os conceitos de Grafos 1, a primeira parte da disciplina. A simulação é construída como uma visualização interativa de grafo, onde cada nó representa uma pessoa e as arestas representam as conexões entre elas. O algoritmo de Busca em Largura (BFS) é aplicado para mostrar como uma "notícia falsa" pode se espalhar a partir de um nó inicial, percorrendo as conexões de forma gradual. A velocidade de propagação e a probabilidade de infecção são influenciadas pelo tipo de relacionamento entre os nós (Família, Amigo, Seguidor).

## Linguagem e Framework

* **Linguagem**: Javascript
* **Framework**: React

## Apresentação

A apresentação do projeto pode ser acessada [aqui](https://www.youtube.com/).

## Guia de Instalação

### Pré-requisitos

- Git
- Node.js v22.17.1 ou superior
- npm v10.7.0 ou superior

### Executando o projeto

Para executar o projeto localmente, basta clonar o repositório e instalar as dependências.

```bash
# Clone o repositório
git clone https://github.com/projeto-de-algoritmos-2025/Grafos-1-FakeNews.git

# Acesse a pasta da aplicação dentro do diretório do repositório
cd fake-news-simulator

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev