# desafio-docker-nginx-node
Desafio treinamento FullCycle, no módulo de DevOps, trabalhando com docker.

### Descrição do desafio
> A ideia principal se trata da utilização do nginx como proxy reverso, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará registros(nomes) no banco de dados mysql, cadastrando os dados na tabela people.

__O retorno da aplicação node.js para o nginx deverá ser:__
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

### Executar 🚀:
```
git clone https://github.com/felipepxavier/desafio-docker-nginx-node.git

cd desafio-docker-nginx-node

docker-compose up -d
```
<br/>
<br/>