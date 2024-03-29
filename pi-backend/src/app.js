const log = require('./middlewares/log');
const routes = require('./routes/index');
//const cookieParser = require("cookie-parser");
const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');
const bodyparser = require('body-parser');

//const session = require("express-session");
const { v4: uuidv4 } = require('uuid');
//const methodOverride = require('method-override') // métodos PUT e DELETE
const app = express();
// captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }));
// converte as informações em formato JSON
app.use(express.json());
// métodos PUT e DELETE
//app.use(methodOverride('_method'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
//app.use(cookieParser());
app.use(cors());

// métodos PUT e DELETE
app.use(methodOverride('_method'));

// liberando acesso a pasta public
app.use(express.static(path.resolve('public')));

app.use(routes);

app.listen(3000, () => {
	console.log('Servidor Rodando!');
});
