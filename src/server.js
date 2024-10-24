// Importando as dependências
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const enableHotReload = require("./hot-reload");

// Puxando os controladores da aplicação
const homeRouter = require("./routes/homeRoute");
const menuRouter = require("./routes/menuRoute");
const loginRouter = require("./routes/loginRoute");
const criarContaRouter = require("./routes/criarContaRoute");
const sacolaRouter = require("./routes/sacolaRoute");
const reservaRouter = require("./routes/reservaRouter");
const eventosRouter = require("./routes/eventosRoute");
const criarEventosRouter = require("./routes/criarEventosRoute");
const session = require('express-session');

// Chamando o express
const app = express();

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// configuração do express-session
app.use(
  session({
    secret:"chave-muito-mais muito-secreta",
    resave: false,
    saveUninitialized: false,
  })
)

// Habilitar hot-reload
enableHotReload(app);

// Rotas das paginas
app.use("/", homeRouter);
app.use("/", menuRouter);
app.use("/", loginRouter);
app.use("/", criarContaRouter);
app.use("/", sacolaRouter);
app.use("/", reservaRouter);
app.use("/", eventosRouter);
app.use("/", criarEventosRouter);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});