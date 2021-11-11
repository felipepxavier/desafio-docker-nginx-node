const express = require('express');
const app = express();
const port = 5000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const queryInsertNameTable = (newName) =>`INSERT INTO people(name) values('${newName}')`;
connection.query(queryInsertNameTable('Felipe Pedroso'));
connection.query(queryInsertNameTable('Frontend/DevOps'));

const querySelectNames = `SELECT name FROM people`;
let people = '';

connection.query(querySelectNames, function (error, rows, fields) {
    if (error) throw error;

    people = rows.map(r => `<li>${r.name}</li>`)
        .join('')
  });

connection.end();

app.get('/', (req, res) => {

  res.send(`<h1>Full Cycle Rocks!</h1><ul>${people}<ul>`)
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}.`);
});