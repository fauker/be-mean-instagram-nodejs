# Node.js - Aula 02 - Exercício
**user:** [fauker](https://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
A requisição adicional é feita porque o **Chrome** está tentando buscar
o `favicon.ico` da aplicação.

## Qual a DIFERENÇA entre o GET e o POST?
De uma forma bem simples: `GET` é utilizado para requisitar dados sem
alterá-los no servidor, enquanto `POST` é utilizado para inserir algo no
servidor. Por exemplo: uma página de pesquisa deve utilizar `GET`,
enquanto um formulário de cadastro deve utilizar `POST` para submeter as
informações no servidor.

Comparação:

**Histórico**:
- GET: Os parâmetros são salvos no browser porque eles fazem parte da
  URL.
- POST: Os parâmetros não são salvos no browser.

**Favoritos no navegador**:
- GET: Pode ser adicionado em favoritos, no navegador.
- POST: Não pode ser adicionado em favoritos, no navegador.

**Tipos de dados suportados**:
- GET: application/x-www-form-urlencoded
- POST: multipart/form-data ou application/x-www-form-urlencoded

**Cache**:
- GET: Pode ser cacheado
- POST: Não pode ser cacheado

**Restrições no formato dos dados**:
- GET: Apenas caracteres ASCII são permitidos
- POST: Sem restrições. Arquivos binátios também são permitidos.

**Usabilidade/Visibilidade**:
- GET: Todas as informações são visíveis na URL, portanto não é
  recomendado utilizar este método para enviar informações delicadas,
  senhas etc.
- POST: As informações são enviadas junto com a requisição HTTP,
  portando nada fica visível na URL. Sendo assim, este método é o
  recomendado para o envio de informações delicadas/senhas para o
  servidor.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

