const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.json({msg: 'Hello World!'}));

var todos = [
      { text: 'Learning React 16.0', completed: true },
      { text: 'Practice React 16.0', completed: false }
    ];

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
	todos.push(req.body);
	return res.json(todos);
});

app.delete('/todos', (req, res) => {
	console.log(req.params);
});

app.listen(3030, function() {
	console.log('sever started');
});